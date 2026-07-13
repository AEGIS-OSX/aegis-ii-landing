"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

export default function StructuralThesis() {
  const revealProps = {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" } as const,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section className="bg-[var(--color-canvas)] py-[var(--space-120)]">
      <div className="max-w-[var(--breakpoints-container)] mx-auto px-[var(--space-32)]">

        {/* Sub-A: What We Are */}
        <motion.div
          {...revealProps}
          className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-[var(--space-48)] md:gap-[var(--space-80)] items-start py-[var(--space-80)] border-b border-[var(--color-divider)]"
        >
          <div className="flex flex-col">
            <span className="font-[family-name:var(--font-body)] text-[var(--text-caption)] font-[400] tracking-[0.08em] uppercase text-[var(--color-text-secondary)] mb-[var(--space-16)]">
              What We Are
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-[var(--text-display)] leading-[var(--text-display-lh)] font-[var(--text-display-weight)] tracking-[var(--text-display-tracking)] text-[var(--color-text-primary)] break-words min-w-0 m-0 mb-[var(--space-32)]">
              A New Category of Exposure
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[var(--text-body-lh)] text-[var(--color-text-secondary)] m-0">
              AEGIS II is not a fund, a consultancy, or a software wrapper. It is a fully autonomous enterprise. While traditional firms rely on manual oversight and relationship-heavy processes, AEGIS II operates through a coordinated fleet of 36 specialized agents. This is the first instance of a business where the execution layer is entirely software-defined.
            </p>
            <p className="font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[var(--text-body-lh)] text-[var(--color-text-secondary)] m-0 mt-[var(--space-24)]">
              Accountability is structural. Every decision, from capital allocation to operational pivot, is logged with cryptographic precision. By removing human operators from the execution loop, we eliminate the friction, bias, and latency inherent in legacy institutional models.
            </p>
            {/* Data callout — Berkeley Mono, Amber */}
            <p className="font-[family-name:var(--font-mono)] text-[var(--text-mono)] leading-[var(--text-mono-lh)] tracking-[var(--text-mono-tracking)] text-[var(--color-accent)] mt-[var(--space-40)] text-center">
              36 bots. Zero human operators in the execution layer.
            </p>
          </div>

          <div className="flex items-start justify-end">
            <ProjectImage
              id="hero"
              className="w-full max-w-[480px] h-auto"
            />
          </div>
        </motion.div>

        {/* Sub-B: Why This Is Different */}
        <motion.div
          {...revealProps}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-[var(--space-48)] md:gap-[var(--space-80)] items-start py-[var(--space-80)]"
        >
          <div className="flex flex-col order-2 md:order-1">
            <span className="font-[family-name:var(--font-body)] text-[var(--text-caption)] font-[400] tracking-[0.08em] uppercase text-[var(--color-text-secondary)] mb-[var(--space-16)]">
              Why This Is Different
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-[var(--text-display)] leading-[var(--text-display-lh)] font-[var(--text-display-weight)] tracking-[var(--text-display-tracking)] text-[var(--color-text-primary)] break-words min-w-0 m-0 mb-[var(--space-32)]">
              Structural Differentiation
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[var(--text-body-lh)] text-[var(--color-text-secondary)] m-0">
              Incumbent models at firms like BlackRock or State Street are structurally limited by human overhead. Their &ldquo;transparency&rdquo; is a retrospective report delivered weeks after the fact. AEGIS II provides algorithmic transparency: a real-time window into a system that executes at a velocity human-led teams cannot match.
            </p>
            <p className="font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[var(--text-body-lh)] text-[var(--color-text-secondary)] m-0 mt-[var(--space-24)]">
              This is a new category of exposure. By investing in autonomous execution, allocators gain access to a vehicle that scales without linear increases in headcount or complexity. It is the transition from managed assets to autonomous assets.
            </p>
          </div>

          <div className="flex items-start justify-start order-1 md:order-2">
            {/* intentionally empty — visual breathing room */}
          </div>
        </motion.div>

      </div>
    </section>
  );
}