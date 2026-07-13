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
            <ProjectImage id="hero" className="hero-image" />
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        .hero-section {
          background-color: var(--color-canvas);
          padding-block-start: var(--space-120);
          padding-block-end: var(--space-160);
        }
        .hero-inner {
          display: grid;
          grid-template-columns: 58% 42%;
          gap: var(--space-64);
          align-items: start;
        }
        .hero-content {
          min-width: 0;
        }
        .hero-rule-wrap {
          margin-bottom: var(--space-32);
        }
        .accent-rule {
          display: block;
          width: 120px;
          height: 1px;
          background-color: var(--color-accent);
        }
        .hero-headline {
          font-family: var(--font-display);
          font-size: var(--text-hero);
          line-height: var(--text-hero-lh);
          font-weight: var(--text-hero-weight);
          letter-spacing: var(--text-hero-tracking);
          color: var(--color-text-primary);
          overflow-wrap: anywhere;
          min-width: 0;
          margin: 0;
        }
        .hero-subhead-wrap {
          margin-top: var(--space-32);
        }
        .hero-subhead {
          font-family: var(--font-body);
          font-size: 20px;
          line-height: 1.6;
          font-weight: 400;
          color: var(--color-text-secondary);
          max-width: 480px;
          margin: 0;
        }
        .hero-cta {
          margin-top: var(--space-48);
        }
        .hero-cta-link {
          white-space: nowrap;
        }
        .hero-image-wrap {
          position: relative;
          width: 100%;
        }
        .hero-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }
        @media (max-width: 768px) {
          .hero-inner {
            grid-template-columns: 1fr;
            gap: var(--space-48);
          }
          .hero-headline {
            font-size: 44px;
            line-height: 1.05;
            letter-spacing: -0.02em;
          }
          .hero-image-wrap {
            order: -1;
          }
        }
        @media (max-width: 375px) {
          .hero-headline {
            font-size: 36px;
          }
          .hero-subhead {
            font-size: 17px;
          }
        }
      `}</style>
    </section>
  );
}
