"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Réflexologie");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>
        La Réflexologie Plantaire : Une Thérapie Ancienne pour le Bien-être
        Moderne
      </SectionHeading>
      <p className="mb-3">
        La réflexologie plantaire est une pratique thérapeutique qui repose sur
        la stimulation de points précis situés sur les pieds. Cette méthode
        ancienne trouve ses racines dans diverses cultures, de l'Égypte antique
        à la Chine, et est utilisée depuis des millénaires pour promouvoir le
        bien-être général.
      </p>
      <br />
      <h1 className="font-bold">Principes de la Réflexologie</h1>
      <br />
      <p className="mb-3">
        Chaque point sur le pied correspond à un organe ou à une partie
        spécifique du corps. En appliquant une pression sur ces zones, le
        réflexologue peut influencer l'organe ou la région associée. Cela se
        base sur l'idée que le corps est interconnecté par un réseau d'énergies
        et que la stimulation de ces points peut aider à rétablir l'équilibre et
        à favoriser la guérison.
      </p>
      <br />
      <h1 className="font-bold">
        Quelques Bienfaits de la Réflexologie Plantaire
      </h1>
      <br />
      <p className="mb-3">
        <ul>
          <span className="font-bold">Détente Profonde</span> L'un des avantages
          les plus immédiats est la relaxation. Beaucoup de personnes se sentent
          détendues et apaisées après une séance.
          <br />
          <span className="font-bold">
            Amélioration de la circulation :
          </span>{" "}
          Elle peut aider à améliorer la circulation sanguine, ce qui est
          bénéfique pour l'ensemble de l'organisme.
          <br />
          <span className="font-bold">Équilibre du système nerveux :</span> En
          stimulant les terminaisons nerveuses, la réflexologie peut contribuer
          à équilibrer le système nerveux.
          <br />
          <span className="font-bold">Soutien à la détoxification :</span> Elle
          aide le corps à éliminer les toxines et renforce le système
          immunitaire.
          <br />
          <span className="font-bold">Soulagement de la douleur :</span> De
          nombreuses personnes trouvent un soulagement de diverses douleurs,
          notamment celles liées au stress et à la tension.
          <br />
        </ul>
      </p>
      <br />
      <h1 className="font-bold">Pour Qui ?</h1>
      <br />
      <p className="mb-3">
        La réflexologie plantaire est adaptée à presque tout le monde, des bébés
        aux personnes âgées. Que vous cherchiez à soulager une douleur
        spécifique, à gérer le stress ou simplement à vous détendre, cette
        thérapie peut être une excellente option.
      </p>
      <br />
      <h1 className="font-bold">Conclusion</h1>
      <br />
      <p className="mb-3">
        La réflexologie plantaire est plus qu'un simple massage des pieds. C'est
        une thérapie holistique qui vise à harmoniser le corps, l'esprit et
        l'âme. Si vous êtes à la recherche d'une méthode naturelle pour
        améliorer votre bien-être général, n'hésitez pas à explorer cette
        pratique ancienne adaptée aux besoins modernes.
      </p>
    </motion.section>
  );
}
