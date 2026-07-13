"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

export default function StructuralThesis() {
  const revealVariants = {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section className="bg-[var(--color-canvas)] py-[var(--space-120)]">
      <div className="max-w-[var(--breakpoints-container)] mx-auto px-[var(--space-32)]">
        {/* Sub-A: What We Are */}
        <motion.div
          initial={revealVariants.initial}
          whileInView={revealVariants.whileInView}
          viewport={revealVariants.viewport}
          transition={revealVariants.transition}
          className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-[var(--space-48)] md:gap-[var(--space-80)] items-start py-[var(--space-80)]"
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
          </div>
          <div className="w-full">
            <ProjectImage
              id="feature_1"
              className="w-full h-auto block object-cover"
            />
          </div>
        </motion.div>

        <hr className="section-divider" />

        {/* Sub-B: How It Works */}
        <motion.div
          initial={revealVariants.initial}
          whileInView={revealVariants.whileInView}
          viewport={revealVariants.viewport}
          transition={revealVariants.transition}
          className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-[var(--space-48)] md:gap-[var(--space-80)] items-start py-[var(--space-80)]"
        >
          <div className="w-full order-2 md:order-1">
            <ProjectImage
              id="feature_2"
              className="w-full h-auto block object-cover"
            />
          </div>
          <div className="flex flex-col order-1 md:order-2">
            <span className="font-[family-name:var(--font-body)] text-[var(--text-caption)] font-[400] tracking-[0.08em] uppercase text-[var(--color-text-secondary)] mb-[var(--space-16)]">
              How It Works
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-[var(--text-display)] leading-[var(--text-display-lh)] font-[var(--text-display-weight)] tracking-[var(--text-display-tracking)] text-[var(--color-text-primary)] break-words min-w-0 m-0 mb-[var(--space-32)]">
              Coordinated Autonomy at Scale
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[var(--text-body-lh)] text-[var(--color-text-secondary)] m-0">
              01 / Autonomous Decomposition. Every high-level objective is broken into atomic tasks and routed to the optimal agent for immediate execution.
            </p>
            <p className="font-[family-name:var(--font-mono)] text-[14px] leading-[1.4] tracking-[0.02em] text-[var(--color-accent)] m-0 mt-[var(--space-8)]">
              Avg. routing latency: &lt;50ms
            </p>
            <p className="font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[var(--text-body-lh)] text-[var(--color-text-secondary)] m-0 mt-[var(--space-24)]">
              02 / Real-time Governance. A dedicated layer of auditor bots monitors every fleet action against pre-defined risk parameters and institutional constraints.
            </p>
            <p className="font-[family-name:var(--font-mono)] text-[14px] leading-[1.4] tracking-[0.02em] text-[var(--color-accent)] m-0 mt-[var(--space-8)]">
              Audit coverage: 100% of operations
            </p>
            <p className="font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[var(--text-body-lh)] text-[var(--color-text-secondary)] m-0 mt-[var(--space-24)]">
              03 / Continuous Optimization. The fleet self-corrects based on live performance data, reallocating compute and focus to the highest-impact workstreams.
            </p>
            <p className="font-[family-name:var(--font-mono)] text-[14px] leading-[1.4] tracking-[0.02em] text-[var(--color-accent)] m-0 mt-[var(--space-8)]">
              System uptime: 99.99%
            </p>
          </div>
        </motion.div>

        <hr className="section-divider" />

        {/* Sub-C: Why This Is Different */}
        <motion.div
          initial={revealVariants.initial}
          whileInView={revealVariants.whileInView}
          viewport={revealVariants.viewport}
          transition={revealVariants.transition}
          className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-[var(--space-48)] md:gap-[var(--space-80)] items-start py-[var(--space-80)]"
        >
          <div className="flex flex-col">
            <span className="font-[family-name:var(--font-body)] text-[var(--text-caption)] font-[400] tracking-[0.08em] uppercase text-[var(--color-text-secondary)] mb-[var(--space-16)]">
              Why This Is Different
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-[var(--text-display)] leading-[var(--text-display-lh)] font-[var(--text-display-weight)] tracking-[var(--text-display-tracking)] text-[var(--color-text-primary)] break-words min-w-0 m-0 mb-[var(--space-32)]">
              Structural Differentiation, Not Incremental Improvement
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[var(--text-body-lh)] text-[var(--color-text-secondary)] m-0">
              Incumbent models at firms like BlackRock or State Street are structurally limited by human overhead. Their &quot;transparency&quot; is a retrospective report delivered weeks after the fact. AEGIS II provides algorithmic transparency: a real-time window into a system that executes at a velocity human-led teams cannot match.
            </p>
            <p className="font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[var(--text-body-lh)] text-[var(--color-text-secondary)] m-0 mt-[var(--space-24)]">
              This is a new category of exposure. By investing in autonomous execution, allocators gain access to a vehicle that scales without linear increases in headcount or complexity. It is the transition from managed assets to autonomous assets.
            </p>
          </div>
          <div className="w-full">
            <ProjectImage
              id="feature_3"
              className="w-full h-auto block object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
