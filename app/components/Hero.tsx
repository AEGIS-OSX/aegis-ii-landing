"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
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
              <motion.div variants={itemVariants} className="hero-rule">
                <span className="accent-rule" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <h1 className="hero-headline">
                  The First Autonomous Asset Class
                </h1>
              </motion.div>
              <motion.div variants={itemVariants} className="hero-subhead-wrap">
                <p className="hero-subhead">
                  A software-defined enterprise operated by a 36-bot autonomous fleet, delivering institutional-grade execution without human intervention.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="hero-cta">
                <a href="#access-request" className="btn-primary">
                  Request Access
                </a>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            className="hero-image-wrap"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <ProjectImage
              id="hero"
              className="hero-image"
              fetchpriority="high"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
