"use client";

import { motion } from "framer-motion";

/**
 * OperationalMetrics Component
 * Displays real-time fleet data in a Bloomberg-style ticker.
 * Uses Berkeley Mono for data and Söhne for labels.
 */
export default function OperationalMetrics() {
  return (
    <section className="metrics-section bg-[var(--color-surface-1)] py-[var(--space-24)] border-t border-[var(--color-divider)] border-b border-[var(--color-divider)] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="metrics-inner flex flex-row items-center gap-[var(--space-48)] overflow-x-auto scrollbar-none"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true, margin: "-60px" }} 
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            msOverflowStyle: "none", 
            scrollbarWidth: "none" 
          }}
        >
          <style jsx>{`
            .metrics-inner::-webkit-scrollbar {
              display: none;
            }
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0; }
            }
            .metrics-cursor {
              animation: blink 1.2s step-end infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .metrics-cursor {
                animation: none;
                opacity: 1;
              }
            }
            @media (max-width: 768px) {
              .metrics-inner {
                gap: var(--space-24);
              }
              .metrics-ticker {
                gap: var(--space-16);
              }
            }
          `}</style>
          
          <span className="metrics-label font-[family-name:var(--font-body)] text-[var(--text-caption)] font-normal tracking-[0.08em] uppercase text-[var(--color-text-secondary)] whitespace-nowrap shrink-0">
            FLEET STATUS
          </span>

          <div className="metrics-ticker flex flex-row items-center gap-[var(--space-32)] flex-nowrap">
            <span className="mono-data font-[family-name:var(--font-mono)] text-[var(--text-mono)] text-[var(--color-accent)] whitespace-nowrap">
              TASKS_COMPLETED: 14,822
            </span>
            <span className="metrics-sep font-[family-name:var(--font-mono)] text-[var(--text-mono)] text-[var(--color-divider)] select-none">
              |
            </span>
            <span className="mono-data font-[family-name:var(--font-mono)] text-[var(--text-mono)] text-[var(--color-accent)] whitespace-nowrap">
              UPTIME: 99.99%
            </span>
            <span className="metrics-sep font-[family-name:var(--font-mono)] text-[var(--text-mono)] text-[var(--color-accent)] opacity-20 select-none">
              |
            </span>
            <span className="mono-data font-[family-name:var(--font-mono)] text-[var(--text-mono)] text-[var(--color-accent)] whitespace-nowrap">
              LATENCY: &lt;200ms
            </span>
            <span className="metrics-cursor font-[family-name:var(--font-mono)] text-[var(--text-mono)] text-[var(--color-accent)]" aria-hidden="true">
              █
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
