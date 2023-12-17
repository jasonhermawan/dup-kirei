"use client";
import { Avatar, Box, Divider, Flex, Stack, Text, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import "../app/globals.css";
import HeaderLinks from "./HeaderLinks";

const Header = () => {
  const pathname = usePathname();
  const [opened, { open, close }] = useDisclosure(false);
  const linkStyle = { textDecoration: "none", color: "black" };

  const navDrawer = () => {
    return (
      <Drawer size="xs" opened={opened} onClose={close}>
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
      </Drawer>
    );
  };

  useEffect(() => {
    close();
  }, [pathname]);

  return (
    <Box>
      {navDrawer()}
      <Box className="layout" py="xl">
        <Link href="/" style={linkStyle}>
          <Stack align="center" gap="10px">
            <Avatar
              src="https://i0.wp.com/kireiwash.com/wp-content/uploads/2021/07/cropped-output-onlinepngtools.png?w=1080&ssl=1"
              alt="Kirei Logo"
              size="70px"
            />
            <Box ta="center">
              <Text size="30px" mb="10px">
                {" "}
                Kirei きれい Wash & Beyond
              </Text>
              <Text size="12px" color="#777777">
                {" "}
                The 1st Premium Eco-Laundromat in Indonesia
              </Text>
            </Box>
          </Stack>
        </Link>
      </Box>
      <Divider color="rgba(0,0,0,0.07)" />
      <Box className="layout" py="25px">
        <Flex align="center" justify="space-between">
          <Flex gap="xl" visibleFrom="md">
            <HeaderLinks params="/" title="Home" />
            <HeaderLinks params="/about-us" title="About Us" />
            <HeaderLinks params="/our-services" title="Our Services" />
            <HeaderLinks params="/eco-community" title="Eco Community" />
            <HeaderLinks params="/partnership" title="Partnership" />
          </Flex>
          <Box hiddenFrom="md">
            <i
              className="bx bx-menu"
              style={{ fontSize: "28px" }}
              onClick={open}
            ></i>
          </Box>
          <Flex gap="md">
            <Link href="/">
              <i className="bx bx-unlink" style={{ color: "black" }} />
            </Link>
            <Link href="/">
              <i className="bx bxl-instagram" style={{ color: "black" }} />
            </Link>
          </Flex>
        </Flex>
      </Box>
      <Divider color="rgba(0,0,0,0.07)" />
    </Box>
  );
};

export default Header;
