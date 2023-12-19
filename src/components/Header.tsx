"use client";
import { Box, Divider, Flex, Stack, Drawer, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import "../app/globals.css";
import HeaderLinks from "./HeaderLinks";
import Logo from '../assets/logo-blue.png'
import Image from 'next/image'

const Header = () => {
  const pathname = usePathname();
  const router = useRouter()
  const [opened, { open, close }] = useDisclosure(false);

  const navDrawer = () => {
    return (
      <Drawer size="xs" opened={opened} onClose={close} position="right">
        <Stack gap="lg" mt="20px">
          <HeaderLinks params="/" title="Home" />
          <Divider color="rgba(0,0,0,0.07)" />
          <HeaderLinks params="/about-us" title="About Us" />
          <Divider color="rgba(0,0,0,0.07)" />
          <HeaderLinks params="/our-services" title="Our Services" />
          <Divider color="rgba(0,0,0,0.07)" />
          <HeaderLinks params="/eco-community" title="Eco Community" />
          <Divider color="rgba(0,0,0,0.07)" />
          <HeaderLinks params="/partnership" title="Partnership" />
        </Stack>
        <Stack pos="absolute" bottom="20px" right="20px" left="20px">
          <Button w="100%" variant="outline" color="black" h="40px" onClick={() => router.push("/login")}>Login / Sign up</Button>
          <Button w="100%" h="40px">Download Apps</Button>
        </Stack>
      </Drawer>
    );
  };

  useEffect(() => {
    close();
  }, [pathname]);

  return (
    <Box className="layout" py="20px" bg="white">
      {navDrawer()}
      <Flex justify="space-between">
        <Flex align="center" gap="40px">
          <Image
          onClick={() => router.push("/")}
            src={Logo}
            height={30}
            alt="Picture of the author"
          />
          <Flex align="center" gap="40px" visibleFrom="lg">
            <HeaderLinks params="/about-us" title="About Us" />
            <HeaderLinks params="/our-services" title="Our Services" />
            <HeaderLinks params="/eco-community" title="Eco Community" />
            <HeaderLinks params="/partnership" title="Partnership" />
          </Flex>
        </Flex>
        <Flex align="center" gap="20px" visibleFrom="lg">
          <Button variant="outline" color="black" h="40px" onClick={() => router.push("/login")}>Login / Sign up</Button>
          <Button h="40px">Download Apps</Button>
        </Flex>
        <Box hiddenFrom="lg">
          <i
            className="bx bx-menu"
            style={{ fontSize: "28px" }}
            onClick={open}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
