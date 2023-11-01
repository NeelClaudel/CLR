"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { Languages, Technologies, Framworks, Protocols } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Prestations");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Trarifications</SectionHeading>
      <p className="mt-4 text-gray-700 dark:text-white/70">
        Pour une séance de réflexologie plantaire
      </p>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {Languages.map((languages, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {languages}
          </motion.li>
        ))}
      </ul>
      <br />

      <SectionHeading>Pour la Détente</SectionHeading>
      <p className="mt-4 text-gray-700 dark:text-white/70">
        Pour une séance de détente
      </p>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {Technologies.map((techs, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {techs}
          </motion.li>
        ))}
      </ul>

      <br />
      <SectionHeading>Mutuels et Prise en Charges</SectionHeading>
      <p className="mt-4 text-gray-700 dark:text-white/70">
        Listes des mutuels et prise en charges sujet à remboursement et aides
      </p>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {Framworks.map((framworks, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {framworks}
          </motion.li>
        ))}
      </ul>
      {/*
      <br />

      <SectionHeading>Blockchain Side Protocols and Tools</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {Protocols.map((protocols, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {protocols}
          </motion.li>
        ))}
      </ul>
      */}
    </section>
  );
}
