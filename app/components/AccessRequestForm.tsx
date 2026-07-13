"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function AccessRequestForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      organization: formData.get("organization"),
      role: formData.get("role"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/access-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const buttonText = {
    idle: "Request Access",
    submitting: "Submitting\u2026",
    success: "Received. Zac will be in touch.",
    error: "Retry Submission",
  };

  const inputClass =
    "font-[family-name:var(--font-mono)] text-[var(--text-mono)] text-[var(--color-text-primary)] bg-transparent border border-[var(--color-divider)] rounded-[var(--radius-input)] px-[var(--space-16)] py-[var(--space-12)] w-full focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-200 placeholder:text-[var(--color-text-secondary)]";

  const labelClass =
    "font-[family-name:var(--font-body)] text-[var(--text-caption)] font-medium tracking-[0.04em] uppercase text-[var(--color-text-secondary)]";

  return (
    <section id="access-request" className="form-section">
      <div className="container">
        <motion.div
          className="form-inner"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {status === "success" ? (
            <div className="flex flex-col gap-[var(--space-16)]">
              <span className="thesis-eyebrow">Access Request</span>
              <p
                className="font-[family-name:var(--font-body)] text-[var(--text-display)] leading-[var(--text-display-lh)] font-[var(--text-display-weight)] text-[var(--color-success)]"
                role="status"
              >
                Received. Zac will be in touch.
              </p>
            </div>
          ) : (
            <>
              <span className="thesis-eyebrow">Access Request</span>
              <h2 className="thesis-heading">Allocation Inquiry</h2>
              <p className="form-lede">
                AEGIS II is not publicly available. Access is extended by invitation or direct application. Complete the form below to initiate a review.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col">
                {/* Full Name */}
                <div className="flex flex-col gap-[var(--space-8)] mb-[var(--space-24)]">
                  <label htmlFor="name" className={labelClass}>
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Jane Smith"
                    className={inputClass}
                    disabled={status === "submitting"}
                  />
                </div>

                {/* Institutional Affiliation */}
                <div className="flex flex-col gap-[var(--space-8)] mb-[var(--space-24)]">
                  <label htmlFor="organization" className={labelClass}>
                    Institutional Affiliation
                  </label>
                  <input
                    id="organization"
                    type="text"
                    name="organization"
                    required
                    placeholder="Firm or institution name"
                    className={inputClass}
                    disabled={status === "submitting"}
                  />
                </div>

                {/* Role/Title */}
                <div className="flex flex-col gap-[var(--space-8)] mb-[var(--space-24)]">
                  <label htmlFor="role" className={labelClass}>
                    Role/Title
                  </label>
                  <input
                    id="role"
                    type="text"
                    name="role"
                    required
                    placeholder="Managing Partner, CIO, etc."
                    className={inputClass}
                    disabled={status === "submitting"}
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-[var(--space-8)] mb-[var(--space-24)]">
                  <label htmlFor="email" className={labelClass}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="jane@institution.com"
                    className={inputClass}
                    disabled={status === "submitting"}
                  />
                </div>

                {/* Optional Message */}
                <div className="flex flex-col gap-[var(--space-8)] mb-[var(--space-48)]">
                  <label htmlFor="message" className={labelClass}>
                    Optional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Any context you would like to share"
                    className={`${inputClass} resize-none`}
                    disabled={status === "submitting"}
                  />
                </div>

                {status === "error" && (
                  <p
                    className="font-[family-name:var(--font-mono)] text-[var(--text-mono)] text-red-400 mb-[var(--space-16)]"
                    role="alert"
                  >
                    Submission failed. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  className="btn-primary self-start"
                  disabled={status === "submitting"}
                >
                  {buttonText[status]}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}