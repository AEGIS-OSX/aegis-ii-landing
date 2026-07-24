"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="hero-section">
      <div className="container">
        {/* Logo mark */}
        <div className="mb-[var(--space-64)]">
          <ProjectImage
            id="logo"
            className="h-8 w-auto"
          />
        </div>

        <div className="hero-inner">
          <div className="hero-content">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="hero-rule-wrap">
                <span className="accent-rule" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <h1 className="hero-headline">
                  The First Autonomous Asset Class
                </h1>
              </motion.div>
              <motion.div variants={itemVariants} className="hero-subhead-wrap">
                <p className="hero-subhead">
                  A software-defined enterprise operated by a 36-bot autonomous
                  fleet, delivering institutional-grade execution without human
                  intervention.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="hero-cta">
                <a
                  href="#access-request"
                  className="btn-primary hero-cta-link"
                >
                  Request Access
                </a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="hero-image-wrap"
            initial={
              shouldReduceMotion
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 32 }
            }
            animate={{ opacity: 1, x: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }
            }
          >
            <ProjectImage
              id="hero"
              className="w-full max-w-[560px] h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}