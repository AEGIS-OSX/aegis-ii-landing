"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const statements = [
  {
    id: "feature_1" as const,
    counter: "01 /",
    body: "Autonomous Decomposition. Every high-level objective is broken into atomic tasks and routed to the optimal agent for immediate execution.",
    meta: "Avg. routing latency: <50ms",
    imageLeft: true,
  },
  {
    id: "feature_2" as const,
    counter: "02 /",
    body: "Real-time Governance. A dedicated layer of auditor bots monitors every fleet action against pre-defined risk parameters and institutional constraints.",
    meta: "Audit coverage: 100% of operations",
    imageLeft: false,
  },
  {
    id: "feature_3" as const,
    counter: "03 /",
    body: "Continuous Optimization. The fleet self-corrects based on live performance data, reallocating compute and focus to the highest-impact workstreams.",
    meta: "System uptime: 99.99%",
    imageLeft: true,
  },
];

export default function HowItWorks() {
  return (
    <section
      className="bg-[var(--color-surface-1)] py-[var(--space-120)]"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-[var(--breakpoints-container)] mx-auto px-[var(--space-32)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-[var(--space-80)]"
        >
          <span className="font-[family-name:var(--font-body)] text-[var(--text-caption)] font-[400] tracking-[0.08em] uppercase text-[var(--color-text-secondary)] block mb-[var(--space-16)]">
            How It Works
          </span>
          <h2
            id="how-it-works-heading"
            className="font-[family-name:var(--font-display)] text-[var(--text-display)] leading-[var(--text-display-lh)] font-[var(--text-display-weight)] tracking-[var(--text-display-tracking)] text-[var(--color-text-primary)] m-0"
          >
            Operational Architecture
          </h2>
        </motion.div>

        <div className="flex flex-col divide-y divide-[var(--color-divider)]">
          {statements.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-[var(--space-48)] md:gap-[var(--space-80)] items-center py-[var(--space-64)]`}
            >
              {/* Image column */}
              <div
                className={`flex items-center justify-center ${
                  s.imageLeft ? "md:order-1" : "md:order-2"
                }`}
              >
                <ProjectImage
                  id={s.id}
                  className="w-full max-w-[480px] h-auto"
                />
              </div>

              {/* Text column */}
              <div
                className={`flex flex-col gap-[var(--space-16)] ${
                  s.imageLeft ? "md:order-2" : "md:order-1"
                }`}
              >
                <span className="font-[family-name:var(--font-mono)] text-[var(--text-mono)] leading-[var(--text-mono-lh)] tracking-[var(--text-mono-tracking)] text-[var(--color-text-secondary)]">
                  {s.counter}
                </span>
                <p className="font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[var(--text-body-lh)] text-[var(--color-text-primary)] m-0">
                  {s.body}
                </p>
                <span className="font-[family-name:var(--font-mono)] text-[var(--text-mono)] leading-[var(--text-mono-lh)] tracking-[var(--text-mono-tracking)] text-[var(--color-accent)]">
                  {s.meta}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}