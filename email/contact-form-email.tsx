import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  senderEmail: string;
  name: string;
  company: string;
  message: string;
  phone: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  name,
  company,
  phone,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>
                From <span className="font-bold">{name}</span>, Company :{" "}
                <span className="font-bold">{company}</span>
              </Text>
              <Text>{message}</Text>
              <Hr />
              <Text>
                The sender's email is:{" "}
                <span className="font-bold">{senderEmail}</span>
              </Text>
              <Text>
                The sender's phone is:{" "}
                <span className="font-bold">{phone}</span>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
