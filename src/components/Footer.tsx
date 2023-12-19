"use client";
import { Box, Flex, Stack, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import "../app/globals.css";
import Logo from "../assets/logo-white.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const router = useRouter();
  const footerMobile = () => {
    return (
      <Stack
        className="layout"
        ta="left"
        hiddenFrom="md"
        pt="30px"
        pb="100px"
        gap="xl"
      >
        <Image
          onClick={() => router.push("/")}
          src={Logo}
          height={30}
          alt="Picture of the author"
        />
        <FooterLinks params="/" title="Terms & Condition" />
        <FooterLinks params="/" title="Privacy Policy" />
        <FooterLinks params="/" title="All right reserved @Kirei" />
      </Stack>
    );
  };

  const footerDesktop = () => {
    return (
      <Flex
        className="layout"
        align="center"
        justify="space-between"
        visibleFrom="md"
      >
        <Flex align="center" gap="40px">
          <Image
            onClick={() => router.push("/")}
            src={Logo}
            height={30}
            alt="Picture of the author"
          />
          <FooterLinks params="/" title="Terms & Condition" />
          <FooterLinks params="/" title="Privacy Policy" />
          <FooterLinks params="/" title="All right reserved @Kirei" />
        </Flex>
        <Stack gap="8px">
          <Text size="14px" color="white" fw="300">
            Binckhorstlaan 36, UNIT M053 2516BE.
          </Text>
          <Text size="14px" color="white" fw="300">
            Chamber of commerce number 86955411
          </Text>
        </Stack>
      </Flex>
    );
  };
  return (
    <Box bg="rgba(20, 20, 39, 1)" w="100vw" py="30px">
      {footerMobile()}
      {footerDesktop()}
    </Box>
  );
};

export default Footer;
