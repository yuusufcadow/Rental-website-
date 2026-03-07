import React from "react";
import { motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import { HiMiniShieldCheck, HiCheckBadge } from "react-icons/hi2";

function Choose() {
  const primary = "#1447e6";

  const items = [
    {
      icon: <HiCheckBadge size={26} />,
      title: "Verified Listings",
      desc: "Every rental on our platform is carefully reviewed to help users find trusted and reliable homes.",
    },
    {
      icon: <IoSearch size={26} />,
      title: "Easy Search",
      desc: "Advanced filters and location-based search make it simple to discover the right rental house fast.",
    },
    {
      icon: <HiMiniShieldCheck size={26} />,
      title: "Trusted Landlords",
      desc: "We work with trusted property owners to support a safer and more transparent rental experience.",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 45,
      scale: 0.96,
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
    hidden: {
      opacity: 0,
      scale: 0.65,
      rotate: -8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 16,
        delay: 0.12,
      },
    },
    hover: {
      scale: 1.12,
      y: -6,
      rotate: 4,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 12,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-[#f4f7fb] py-14 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1b2236]">
            Why Choose Us
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#7d8aa5]">
            Making rental house search easier with trusted listings, simple tools,
            and reliable support.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group text-center transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300"
                style={{
                  backgroundColor: `${primary}15`,
                  color: primary,
                  boxShadow: "0 10px 30px rgba(20, 71, 230, 0.08)",
                }}
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <motion.h3
                variants={textVariants}
                className="mt-5 text-lg sm:text-xl font-semibold text-[#2a344b]"
              >
                {item.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                variants={textVariants}
                className="mx-auto mt-3 max-w-[320px] text-sm sm:text-base leading-7 text-[#7d8aa5]"
              >
                {item.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Choose;