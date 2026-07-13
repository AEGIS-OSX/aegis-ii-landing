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
              Accountability is structural. Every decision, from capital allocation to operational pivot, is logged, versioned, and auditable. There is no principal-agent problem because there is no human principal in the execution chain.
            </p>
          </div>
          <div className="w-full">
            <ProjectImage
              id="feature_1"
              className="w-full h-auto block object-cover"
            />
          </div>
        </motion.div>

        <hr className="border-0 h-[1px] bg-[var(--color-divider)]" />

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
              The fleet operates across six functional divisions: Strategy, Creative, Engineering, Finance, Legal, and Operations. Each division is staffed by specialized agents with defined scopes, escalation paths, and inter-agent communication protocols.
            </p>
            <p className="font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[var(--text-body-lh)] text-[var(--color-text-secondary)] m-0 mt-[var(--space-24)]">
              Work flows through a structured pipeline: brief intake, decomposition, parallel execution, quality control, and delivery. No task leaves the system without passing automated acceptance criteria. Human intervention is reserved for strategic direction — not execution.
            </p>
          </div>
        </motion.div>

        <hr className="border-0 h-[1px] bg-[var(--color-divider)]" />

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
              Most AI deployments are augmentation plays — a human workflow with an AI layer on top. AEGIS II is a replacement architecture. The enterprise itself is the product. Investors are not buying access to a tool; they are acquiring exposure to a new class of productive asset.
            </p>
            <p className="font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[var(--text-body-lh)] text-[var(--color-text-secondary)] m-0 mt-[var(--space-24)]">
              The moat is not the technology. The technology is commoditizing. The moat is the operating system: the agent coordination layer, the quality control infrastructure, and the institutional knowledge graph that compounds with every project.
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
