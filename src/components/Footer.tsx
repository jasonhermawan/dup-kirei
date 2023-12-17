import { Box, Flex, Stack, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import '../app/globals.css'

const Footer = () => {
  const footerMobile = () => {
    return (
      <Stack ta="center" hiddenFrom="md">
         <Text color="white" size="13px" fw="bold" lh="lg">
          © Hak Cipta2023 Kirei きれい Wash & Beyond. Hak Cipta Dilindungi.
        </Text>
        <Flex gap="md" justify="center">
          <Link href="/">
            <i className="bx bx-unlink" style={{color: "white"}}/>
          </Link>
          <Link href="/">
            <i className="bx bxl-instagram" style={{color: "white"}}/>
          </Link>
        </Flex>
      </Stack>
    )
  }

  const footerDesktop = () => {
    return (
      <Flex className='layout' align="center" justify="space-between" visibleFrom="md">
        <Text color="white" size="13px" fw="bold">
          © Hak Cipta2023 Kirei きれい Wash & Beyond. Hak Cipta Dilindungi.
        </Text>
        <Flex gap="md">
          <Link href="/">
            <i className="bx bx-unlink" style={{color: "white"}}/>
          </Link>
          <Link href="/">
            <i className="bx bxl-instagram" style={{color: "white"}}/>
          </Link>
        </Flex>
      </Flex>
    )
  }
  return (
    <Box bg="black" w="100vw" py="20px" mt="50px">
      {footerMobile()}
      {footerDesktop()}
    </Box> 
  );
};

export default Footer;