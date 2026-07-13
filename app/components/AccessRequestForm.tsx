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
      aum: formData.get("aum"),
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
    idle: "Submit Request",
    submitting: "Submitting…",
    success: "Request Received",
    error: "Retry Submission",
  };

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
          <span className="thesis-eyebrow">
            Access Request
          </span>
          <h2 className="thesis-heading">
            Request Institutional Access
          </h2>
          <p className="form-lede">
            AEGIS II is not publicly available. Access is extended by invitation or direct application. Complete the form below to initiate a review.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-col gap-[var(--space-8)] mb-[var(--space-24)]">
              <label htmlFor="name" className="font-[family-name:var(--font-body)] text-[var(--text-caption)] font-medium tracking-[0.04em] uppercase text-[var(--color-text-secondary)]">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="First Last"
                autoComplete="name"
                className="w-full bg-[var(--color-canvas)] text-[var(--color-text-primary)] font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[var(--text-body-lh)] border border-[var(--color-divider)] rounded-[var(--radius-input)] px-[var(--space-16)] py-[var(--space-12)] outline-2 outline-transparent outline-offset-1 transition-all duration-150 ease-[var(--ease-out)] focus-visible:border-[var(--color-accent)] focus-visible:outline-[var(--color-focus)] placeholder:text-[var(--color-text-secondary)] placeholder:opacity-50"
              />
            </div>

            <div className="flex flex-col gap-[var(--space-8)] mb-[var(--space-24)]">
              <label htmlFor="organization" className="font-[family-name:var(--font-body)] text-[var(--text-caption)] font-medium tracking-[0.04em] uppercase text-[var(--color-text-secondary)]">
                Organization
              </label>
              <input
                id="organization"
                type="text"
                name="organization"
                required
                placeholder="Firm or Institution"
                autoComplete="organization"
                className="w-full bg-[var(--color-canvas)] text-[var(--color-text-primary)] font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[var(--text-body-lh)] border border-[var(--color-divider)] rounded-[var(--radius-input)] px-[var(--space-16)] py-[var(--space-12)] outline-2 outline-transparent outline-offset-1 transition-all duration-150 ease-[var(--ease-out)] focus-visible:border-[var(--color-accent)] focus-visible:outline-[var(--color-focus)] placeholder:text-[var(--color-text-secondary)] placeholder:opacity-50"
              />
            </div>

            <div className="flex flex-col gap-[var(--space-8)] mb-[var(--space-24)]">
              <label htmlFor="role" className="font-[family-name:var(--font-body)] text-[var(--text-caption)] font-medium tracking-[0.04em] uppercase text-[var(--color-text-secondary)]">
                Role
              </label>
              <input
                id="role"
                type="text"
                name="role"
                required
                placeholder="e.g. Managing Director, CIO"
                className="w-full bg-[var(--color-canvas)] text-[var(--color-text-primary)] font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[var(--text-body-lh)] border border-[var(--color-divider)] rounded-[var(--radius-input)] px-[var(--space-16)] py-[var(--space-12)] outline-2 outline-transparent outline-offset-1 transition-all duration-150 ease-[var(--ease-out)] focus-visible:border-[var(--color-accent)] focus-visible:outline-[var(--color-focus)] placeholder:text-[var(--color-text-secondary)] placeholder:opacity-50"
              />
            </div>

            <div className="flex flex-col gap-[var(--space-8)] mb-[var(--space-24)]">
              <label htmlFor="email" className="font-[family-name:var(--font-body)] text-[var(--text-caption)] font-medium tracking-[0.04em] uppercase text-[var(--color-text-secondary)]">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@firm.com"
                autoComplete="email"
                className="w-full bg-[var(--color-canvas)] text-[var(--color-text-primary)] font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[var(--text-body-lh)] border border-[var(--color-divider)] rounded-[var(--radius-input)] px-[var(--space-16)] py-[var(--space-12)] outline-2 outline-transparent outline-offset-1 transition-all duration-150 ease-[var(--ease-out)] focus-visible:border-[var(--color-accent)] focus-visible:outline-[var(--color-focus)] placeholder:text-[var(--color-text-secondary)] placeholder:opacity-50"
              />
            </div>

            <div className="flex flex-col gap-[var(--space-8)] mb-[var(--space-24)]">
              <label htmlFor="aum" className="font-[family-name:var(--font-body)] text-[var(--text-caption)] font-medium tracking-[0.04em] uppercase text-[var(--color-text-secondary)]">
                Assets Under Management
              </label>
              <select
                id="aum"
                name="aum"
                required
                defaultValue=""
                className="w-full bg-[var(--color-canvas)] text-[var(--color-text-primary)] font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[var(--text-body-lh)] border border-[var(--color-divider)] rounded-[var(--radius-input)] px-[var(--space-16)] py-[var(--space-12)] outline-2 outline-transparent outline-offset-1 transition-all duration-150 ease-[var(--ease-out)] focus-visible:border-[var(--color-accent)] focus-visible:outline-[var(--color-focus)]"
              >
                <option value="" disabled>Select range</option>
                <option value="$0–$50M">$0–$50M</option>
                <option value="$50M–$250M">$50M–$250M</option>
                <option value="$250M–$1B">$250M–$1B</option>
                <option value="$1B+">$1B+</option>
              </select>
            </div>

            <div className="flex flex-col gap-[var(--space-8)] mb-[var(--space-24)]">
              <label htmlFor="message" className="font-[family-name:var(--font-body)] text-[var(--text-caption)] font-medium tracking-[0.04em] uppercase text-[var(--color-text-secondary)]">
                Message (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Describe your interest or ask a specific question."
                className="w-full bg-[var(--color-canvas)] text-[var(--color-text-primary)] font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[var(--text-body-lh)] border border-[var(--color-divider)] rounded-[var(--radius-input)] px-[var(--space-16)] py-[var(--space-12)] outline-2 outline-transparent outline-offset-1 transition-all duration-150 ease-[var(--ease-out)] focus-visible:border-[var(--color-accent)] focus-visible:outline-[var(--color-focus)] placeholder:text-[var(--color-text-secondary)] placeholder:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              aria-disabled={status === "submitting" || status === "success"}
              className="btn-primary"
            >
              {buttonText[status]}
            </button>

            {status === "success" && (
              <p className="font-[family-name:var(--font-body)] text-[var(--text-caption)] text-[var(--color-accent)] mt-[var(--space-16)]">
                Your request has been received. We will be in touch within 2 business days.
              </p>
            )}

            {status === "error" && (
              <p className="font-[family-name:var(--font-body)] text-[var(--text-caption)] text-[var(--color-error,#C0392B)] mt-[var(--space-16)]">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
