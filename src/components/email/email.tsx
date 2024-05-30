
import { ContactSchema } from "@/app/contact/form";
import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { z } from "zod";

export const ContactTemplate = (userdetails: z.infer<typeof ContactSchema>) => (
  <Html>
    <Head />
    <Preview>{userdetails.subject}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={paragraphContent}>
          <Column>
            <Text style={{ ...paragraph, fontSize: "20px" }}>
              Me. Pixelayout
            </Text>
          </Column>
        </Section>
        <Section style={paragraphContent}>
          <Hr style={hr} />
          
          <Text style={paragraph}>{userdetails?.message}</Text>
        </Section>

        <Section style={paragraphContent}>
          <Text style={paragraph}>Thank you,</Text>
          <Text style={{ ...paragraph, fontSize: "20px" }}>
            {userdetails.email}
          </Text>
        </Section>

        <Section style={{ ...paragraphContent, paddingBottom: 30 }}>
          <Text
            style={{
              ...paragraph,
              fontSize: "12px",
              textAlign: "center",
              margin: 0,
            }}
          >
            © 2023 Pixelayout LLC 20122 Lanet Works, Lake View, NA 20100, Kenya
          </Text>
          <Text
            style={{
              ...paragraph,
              fontSize: "12px",
              textAlign: "center",
              margin: 0,
            }}
          >
            You have received this improtant email from{" "}
            <a href="https://me.pixelayout.site">Me. Pixelayout</a> <br></br>
            Please respond to it as soon as possible as it maybe a client
            looking to work with you.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#dbddde",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const sectionLogo = {
  padding: "0 40px",
};

const headerBlue = {
  marginTop: "-1px",
};

const container = {
  margin: "30px auto",
  width: "610px",
  backgroundColor: "#fff",
  borderRadius: 5,
  overflow: "hidden",
};

const containerContact = {
  backgroundColor: "#f0fcff",
  width: "90%",
  borderRadius: "5px",
  overflow: "hidden",
  paddingLeft: "20px",
};

const heading = {
  fontSize: "14px",
  lineHeight: "26px",
  fontWeight: "700",
  color: "#004dcf",
};

const paragraphContent = {
  padding: "0 40px",
};

const paragraphList = {
  paddingLeft: 40,
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#3c4043",
};

const link = {
  ...paragraph,
  color: "#004dcf",
};

const hr = {
  borderColor: "#e8eaed",
  margin: "20px 0",
};
