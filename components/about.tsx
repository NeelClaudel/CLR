"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After some years working in many differents places by occupying{" "}
        <span className="font-medium">various positions</span>, I decided to
        pursue my passion for programming. I enrolled in a coding journey two
        years ago and started learn <br />{" "}
        <span className="font-medium underline">
          full-stack web and blockchain oriented development.
        </span>{" "}
        <br />I started to learn by myself basic of web development and
        programing with <span className="italic">Javascript and Solidity</span>{" "}
        and then I joined a coding school a year ago to switch my career and
        work as a developer.
      </p>
      <p className="mb-3">
        <span className="italic">My favorite part of programming</span> is the
        creative aspect of designing projects and think on how to create
        valuable protocols and applications for{" "}
        <span className="underline">real world usage</span>. I{" "}
        <span className="underline">love</span> the feeling of progression and
        satisfaction when a project grows and becomes a reality.
      </p>
      <p className="mb-3">
        My current stack is composed of <br />{" "}
        <span className="font-medium">
          React, Next.js, Node.js, MongoDB and Thirdweb, Alchemy, Web3.js,
          Ethers.js
        </span>
        . I am also familiar with TypeScript and Solidity which is the
        programming language to develop smart contracts on blockchain networks
        (EVM). Smart contracts revolutionize business logic and models by
        automating and enforcing predefined agreements on the blockchain,
        ensuring transparency, immutability, and reduced intermediation costs,
        thus fostering trust and efficiency in transactions.
      </p>
      <p className="mb-3">
        <br />I am always looking to learn new technologies, framworks and
        libraries especialy in the blockchain ecosystem. Learning decentralized
        economics and finance may be mandatory to understand how crypto currency
        ecosystem work and it is a real passion for me.
      </p>
      <p className="mb-3">
        I am currently focusing on a{" "}
        <span className="font-medium">decentralized Stablecoin protocole</span>,
        which is a cryptocurrency designed to minimize the price volatility
        because is price is pegged to another stable asset like the U.S. dollar
        or gold. This way i keep learning more complexe Solidity like testing
        and auditing smart contracts.
      </p>
      <p>
        I also enjoy{" "}
        <span className="font-medium">
          learning new programming things like video game development with
          Unity, 3D modeling with Blender
        </span>
        . I am currently learning about{" "}
        <span className="font-medium">
          blockchain integration in video game
        </span>{" "}
        by creating a <span className="font-medium">In-Game Economy</span> ruled
        by smart contracts and based on Ethereum Network.
      </p>
      <p className="mt-3">
        <span className="italic">When I'm not coding</span>, I enjoy surfing and
        sports, watching movies, playing music and painting. I also love
        travelling and discover new places and cultures.
      </p>
    </motion.section>
  );
}
