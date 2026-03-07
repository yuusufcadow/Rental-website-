import React from "react";
import { motion } from "framer-motion";
import { HiOutlineLightBulb, HiOutlineRocketLaunch } from "react-icons/hi2";

function VisionMission() {
  const primary = "#1447e6";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.97,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.7, rotate: -8 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 16,
      },
    },
    hover: {
      y: -6,
      scale: 1.08,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 12,
      },
    },
  };

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1b2236]">
            Vision & Mission
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#7d8aa5]">
            Building a trusted rental experience with clear purpose, modern
            service, and reliable support for every home seeker.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {/* Vision */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded border border-[#e9eef8] bg-[#f8fbff] p-6 sm:p-8 shadow-sm"
          >
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="flex h-16 w-16 items-center justify-center rounded"
              style={{
                backgroundColor: `${primary}15`,
                color: primary,
                boxShadow: "0 10px 30px rgba(20, 71, 230, 0.08)",
              }}
            >
              <HiOutlineLightBulb size={28} />
            </motion.div>

            <h3 className="mt-5 text-xl sm:text-2xl font-semibold text-[#1b2236]">
              Our Vision
            </h3>

            <p className="mt-4 text-sm sm:text-base leading-7 text-[#7d8aa5]">
              To become the most trusted and modern platform for finding rental
              homes in Mogadishu, helping people discover safe, comfortable, and
              affordable places to live with confidence.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded border border-[#e9eef8] bg-[#f8fbff] p-6 sm:p-8 shadow-sm"
          >
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="flex h-16 w-16 items-center justify-center rounded"
              style={{
                backgroundColor: `${primary}15`,
                color: primary,
                boxShadow: "0 10px 30px rgba(20, 71, 230, 0.08)",
              }}
            >
              <HiOutlineRocketLaunch size={28} />
            </motion.div>

            <h3 className="mt-5 text-xl sm:text-2xl font-semibold text-[#1b2236]">
              Our Mission
            </h3>

            <p className="mt-4 text-sm sm:text-base leading-7 text-[#7d8aa5]">
              To make house renting easier through verified listings, simple
              search tools, and a smooth digital experience that connects renters
              with trusted landlords quickly and transparently.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default VisionMission;