"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contactez moi</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Vous Pouvez me contacter soit par Téléphone au 06.07.08.09.10 ou par
        mail{" "}
        <a className="underline" href="mailto:neel.claudel@gmail.com">
          neel.claudel@gmail.com
        </a>{" "}
        en completant le formulaire ci-dessous{" "}
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Votre email"
        />
        <br />
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="name"
          type="text"
          required
          maxLength={500}
          placeholder="Votre Nom Complet"
        />
        <br />
        {/* 
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="company"
          maxLength={500}
          placeholder="Your Company Name"
        />
        <br />
        */}
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="phone"
          type="text"
          required
          maxLength={500}
          placeholder="Votre Numéro de Téléphone"
        />
        <br />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
        <br />
        <br />
        <p className="font-thin text-gray-700 -mt-6 dark:text-white/80">
          Pour toutes demande de rendez-vous, veuillez attendre la confirmation
          définitive de ma part.
        </p>
      </form>
    </motion.section>
  );
}
