import React from "react";
import { LuTrees } from "react-icons/lu";
import foot_01 from "@/public/imgs/foot_01.png";
import foot_02 from "@/public/imgs/foot_02.png";
import foot_03 from "@/public/imgs/foot_03.png";
import foot_04 from "@/public/imgs/foot_04.png";
import foot_05 from "@/public/imgs/foot_05.png";
import foot_06 from "@/public/imgs/foot_06.png";
import foot_07 from "@/public/imgs/foot_07.png";
import foot_08 from "@/public/imgs/foot_08.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Réflexologie",
    hash: "#about",
  },
  {
    name: "Détente",
    hash: "#projects",
  },
  {
    name: "Fonctionnement",
    hash: "#experience",
  },
  {
    name: "Prestations",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Principe de base",
    location: "",
    description:
      "Les pieds possèdent des zones qui correspondent à toutes les parties, organes et systèmes du corps. Ces zones sont appelées points réflexes. L'idée est que, en stimulant un point réflexe sur le pied, on peut influencer l'organe ou la partie du corps correspondante.",
    icon: React.createElement(LuTrees, {}), // LuGraduationCap
    date: "",
  },

  {
    title: "Cartographie des pieds",
    location: "",
    description:
      "Les praticiens de la réflexologie utilisent une carte des pieds qui montre où chaque point réflexe est situé. Par exemple, la pointe des orteils peut correspondre à la tête, tandis qu'une zone près de la cheville peut correspondre aux organes reproducteurs. Cette cartographie n'est pas littérale, mais est basée sur des concepts énergétiques et holistiques.",
    icon: React.createElement(LuTrees, {}),
    date: "",
  },
  {
    title: "Technique de massage",
    location: "",
    description:
      "La réflexologie n'est pas simplement un massage des pieds ; elle utilise des techniques spécifiques pour appliquer une pression sur les points réflexes. Les outils couramment utilisés sont les pouces, les doigts et parfois de petits instruments pour appliquer une pression précise.",
    icon: React.createElement(LuTrees, {}),
    date: "",
  },
  {
    title: "Effets recherchés",
    location: "At Home, FR",
    description:
      "Le but de la stimulation est de libérer les blocages énergétiques, de favoriser la circulation, d'aider à l'élimination des toxines et de soutenir le processus d'auto-guérison du corps. Les bénéfices immédiats souvent rapportés comprennent la relaxation, la réduction du stress et une sensation générale de bien-être.",
    icon: React.createElement(LuTrees, {}),
    date: "Summer 2023 to Present",
  },
  {
    title: "Approche holistique",
    location: "",
    description:
      "La réflexologie est basée sur l'idée que le corps est interconnecté et que le déséquilibre dans une partie peut affecter l'ensemble. Elle vise non seulement à traiter les symptômes spécifiques, mais aussi à promouvoir l'équilibre global et le bien-être général.",
    icon: React.createElement(LuTrees, {}),
    date: "",
  },
  {
    title: "Séance typique",
    location: "",
    description:
      "Une séance commence généralement par une discussion avec le client pour comprendre ses besoins ou problèmes de santé. Le réflexologue examinera ensuite les pieds avant de commencer le massage. La session se termine généralement par un moment de relaxation, pendant lequel le client peut ressentir une sensation de légèreté ou de tranquillité.",
    icon: React.createElement(LuTrees, {}),
    date: "",
  },
  {
    title: "Contre-indications",
    location: "",
    description:
      "Bien que la réflexologie soit généralement considérée comme sûre, elle peut ne pas être adaptée à tous. Les personnes ayant des blessures aux pieds, certaines affections cutanées, ou des conditions médicales spécifiques devraient consulter un professionnel de santé avant de commencer le traitement.",
    icon: React.createElement(LuTrees, {}),
    date: "",
  },
  {
    title: "En Conclusion",
    location: "",
    description:
      "La réflexologie plantaire est une pratique ancienne qui offre une approche alternative ou complémentaire à la santé et au bien-être. Elle vise à équilibrer l'énergie du corps et à favoriser l'auto-guérison à travers la stimulation des points réflexes sur les pieds.",
    icon: React.createElement(LuTrees, {}),
    date: "",
  },
] as const;

export const projectsData = [
  {
    title: "Stimulation du système nerveux",
    description:
      "Le pied possède des milliers de terminaisons nerveuses. En stimulant ces points, la réflexologie peut avoir un impact sur le système nerveux parasympathique, qui est responsable de la détente et du repos. Cela peut aider à réduire le stress et à induire une sensation de calme.",
    tags: [""],
    imageUrl: foot_01,
    linkUrl: [
      "https://github.com/NeelClaudel/NestStableCoin-NEST-Contracts.git",
    ],
  },
  {
    title: "Libération d'endorphines",
    description:
      "La stimulation des points réflexes peut entraîner la libération d'endorphines, les hormones du bonheur, qui sont des analgésiques naturels du corps. Elles peuvent procurer une sensation de bien-être et de relaxation.",
    tags: [""],
    imageUrl: foot_02,
    linkUrl: ["https://github.com/NeelClaudel/Stablecoin-UI.git"],
  },
  {
    title: "Réduction de la tension musculaire",
    description:
      "Bien que la réflexologie se concentre sur les pieds, la relaxation induite peut se propager à d'autres parties du corps, réduisant la tension musculaire générale.",
    tags: [""],
    imageUrl: foot_03,
    linkUrl: ["https://realtk.vercel.app"], //https://realtk.vercel.app/
  },
  {
    title: "Amélioration de la circulation",
    description:
      "La réflexologie peut aider à améliorer la circulation sanguine, ce qui favorise l'oxygénation et la nutrition des tissus. Une meilleure circulation peut aussi contribuer à une sensation de légèreté et de détente.",
    tags: [""],
    imageUrl: foot_04,
    linkUrl: ["https://koli.world"],
  },
  {
    title: "Équilibrage énergétique",
    description:
      "Dans les traditions holistiques, on croit que le corps possède un flux d'énergie vital. Les blocages ou déséquilibres de cette énergie peuvent causer du stress ou des tensions. En travaillant sur les points réflexes, la réflexologie vise à rétablir cet équilibre, favorisant ainsi la détente.",
    tags: [""],
    imageUrl: foot_05,
    linkUrl: ["https://codelater.vercel.app/"],
  },
  {
    title: "Attention et présence",
    description:
      "La nature même d'une séance de réflexologie - où le praticien se concentre entièrement sur le client et sur la stimulation des points réflexes - peut en elle-même être très relaxante. Cette attention soutenue, combinée à un environnement souvent calme et apaisant, peut contribuer à une sensation de bien-être et de relaxation profonde.",
    tags: [""],
    imageUrl: foot_06,
    linkUrl: ["https://github.com"],
  },
  {
    title: "Réduction du stress",
    description:
      "Dans notre monde moderne, le stress est omniprésent. La réflexologie, en activant le système nerveux parasympathique et en libérant des endorphines, peut aider à contrer les effets du stress chronique, permettant au corps et à l'esprit de se détendre profondément.",
    tags: [""],
    imageUrl: foot_07,
    linkUrl: ["https://github.com"],
  },
] as const;

export const Languages = [
  "Tarif 1 : 50€/séance",
  "Tarif 2 : 85€/ 2 séance",
] as const;

export const Technologies = ["Formule Détente 1 : 65€/séance"] as const;

export const Framworks = [
  "Axa",
  "Macif",
  "Mutuelle Assurance",
  "Generali",
  "Allianz",
] as const;

export const Protocols = [
  "Truffle",
  "Hardhat",
  "Foundry",
  "Ganache",
  "ChainLink",
  "IPFS",
  "ENS",
  "The Graph",
  "Aave",
  "Uniswap",
  "Alchemy",
  "Moralis",
  "QuikNode",
  "Thirdweb",
  "Metamask",
  "WalletConnect",
  "infura",
  "OpenZeppelin",
  "Ethereum",
  "Polygon",
  "Polkadot",
  "Binance Smart Chain",
  "Solana",
  "Avalanche",
  "OpenSea",
] as const;
