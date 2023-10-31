import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuTrees } from "react-icons/lu";
import nestImg from "@/public/nestImg.svg";
import nestImg2 from "@/public/nestImg2.svg";
import realtk from "@/public/realtk.jpg";
import koli from "@/public/koli.png";
import tokenhiro from "@/public/tokenhiro.jpg";
import codelater from "@/public/codelater.svg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Starting to code",
    location: "At Home, FR",
    description:
      "I started by learning basic web programming with HTML, CSS and JS in 2021 for few mounths. I decided to learn more about blockchain and smart contracts so i started learn Solidity, the programming language of Ethereum.",
    icon: React.createElement(LuTrees), // LuGraduationCap
    date: "2021",
  },
  {
    title: "Aspirant Smart Contract Developer",
    location: "At Home, FR",
    description:
      "From my knowledge in Solidity, i started to develop smart contracts and deploy tokens on ethereum for my own projects. I also started to learn more about the blockchain ecosystem and the different existing protocols.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Cursus Licence (RNCP6) : Application Design Developer",
    location: "Wild Code School en Cursus Alternance, FR",
    description:
      "I've been follow a one year training in web development at Wild Code School. I learned more advanced web development concepts and the different existing technologies like React, Node, Git, Docker, GraphQL. I also learned how to collaborate in a team to manage a project with tools like Github, CI, Version Control. Meanwhile, I was working for a company as junior developper during this training.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Game Development Project",
    location: "At Home, FR",
    description:
      "I have been working on a 3D video game project for 4 mounths. It's a roleplay game in medieval environment with dynamic combats and world exploration. I'm using Unity Engine, C# to develop the game, blockchain interations will be managed with ThirdwebSDK. Alpha release is planned the game in september 2024.",
    icon: React.createElement(FaReact),
    date: "Summer 2023 to Present",
  },
  {
    title: "FreeLance Web and blockchain Developer",
    location: "At Home, FR",
    description:
      "I'm currently working as a freelancer web and blockchain developer. I'm working on different projects like web decentralized app and smart contracts, I'm also working on expending services i can provide so i keep learning new technologies and protocols.",
    icon: React.createElement(FaReact),
    date: "Present",
  },
  {
    title: "Stablecoin Protocol",
    location: "At Home, FR",
    description:
      "Curently working on my project of stablecoin protocole. The goal is to create a over colateralized stablecoin protocol and scale over time by adding more Fiat backed stablecoin trading pair like JPY, AUD, EUR using Chainlink Oracle to ensure data verification. The protocole will be deployed on the Ethereum blockchain.",
    icon: React.createElement(FaReact),
    date: "Present",
  },
] as const;

export const projectsData = [
  {
    title: "Nest Stable Coin - Smart Contract",
    description:
      "An algorythmic, exogeneously, over colateralized and scalable platform for stablecoins. Offering ERC20 version of Forex pair trading like USD, JPY, AUD, EUR on Ethereum",
    tags: ["Solidity", "Rust", "Chainlink", "Foundry", "OpenZeppelin"],
    imageUrl: nestImg,
    linkUrl: [
      "https://github.com/NeelClaudel/NestStableCoin-NEST-Contracts.git",
    ],
  },
  {
    title: "Nest Stable Coin - Front End",
    description:
      "Front-end UI for the Nest Stable Coin platform. Will allows users to mint, burn, stake, swap and trade Nest based stablecoins.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Ethers.js"],
    imageUrl: nestImg2,
    linkUrl: ["https://github.com/NeelClaudel/Stablecoin-UI.git"],
  },
  {
    title: "Realtk",
    description:
      "A real estate tokenization platform. It allows users to tokenize their real estate assets and sell them as NFTs. It also allows users to buy real estate NFTs and earn passive income from rent.",
    tags: ["React", "js", "hardhat", "metamask", "web3", "solidity"],
    imageUrl: realtk,
    linkUrl: ["https://realtk.vercel.app"], //https://realtk.vercel.app/
  },
  {
    title: "Koli",
    description:
      "A AI based app writer. It generates text based on a given topic. It uses OpenAI's GPT API. Software as a service project.",
    tags: ["OpenAi", "LLM", "DB", "Dashboard", "Saas"],
    imageUrl: koli,
    linkUrl: ["https://koli.world"],
  },
  {
    title: "Codelater",
    description:
      "A code translator that allows you to translate your code into different programming languages.",
    tags: ["Next.js", "LLM", "OpenAi", "CodeMirror"],
    imageUrl: codelater,
    linkUrl: ["https://codelater.vercel.app/"],
  },
  {
    title: "TokenHiro",
    description:
      "My freelancer  project. I'm using it to sell my services as a web and smart contract developer. I also provide consulting for clients who want to start a blockchain project.",
    tags: ["Next.js", "LLM", "DB", "Dashboard", "Saas"],
    imageUrl: tokenhiro,
    linkUrl: ["https://github.com"],
  },
] as const;

export const Languages = [
  "HTML",
  "CSS",
  "JavaScript/TypeScript",
  "Solidity",
  "C# Sharp",
  "Rust",
  "Golang",
] as const;

export const Technologies = [
  "Node.js",
  "Git",
  "Tailwind",
  "Sanity",
  "Stripe",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "Docker",
  "LLM",
  "OpenAi",
] as const;

export const Framworks = [
  "React",
  "Next.js",
  "Thirdweb SDK",
  "Moralis SDK",
  "Ethers.js",
  "Web3.js",
  "Framer Motion",
  "Alchemy SDK and RPC",
  "Viem",
  "Wagmi",
  "Substrate",
  "Cosmos/Ignite",
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
