"use client";
import { Box, Button, Checkbox, Flex, PinInput, Text, } from "@mantine/core";
import Image from "next/image";
import React from "react";
import ImageAuth from "../../image-auth.png";
import "../../auth.css";
import { useRouter } from "next/navigation";

const SignupOTP = () => {
  const router = useRouter();
  const printForm = () => {
    return (
      <>
        <Flex justify="center">
          <PinInput size="md" length={6} placeholder="" type="number" oneTimeCode/>
        </Flex>
        <Box visibleFrom="sm">
          <Button mt="55px" w="100%" size="md" onClick={() => router.push("/signup/create-password")}>Continue</Button>
          <Button variant="transparent" mt="10px" onClick={() => router.push("/login")}>
            Verified By Email
          </Button>
        </Box>

        <Box hiddenFrom="sm" pos="absolute" bottom="20px" right="20px" left="20px" >
          <Button mt="55px" w="100%" size="md" onClick={() => router.push("/signup/create-password")}>Continue</Button>
          <Button variant="transparent" mt="10px" onClick={() => router.push("/login")}>
            Verified By Email
          </Button>
        </Box>
      </>
    );
  };
  return (
    <Box>
      <Flex align="center" visibleFrom="lg">
        <Box className="auth-container">
          <Image
            src={ImageAuth}
            alt="kirei"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box w="55%">
          <Box ta="center" w="60%" m="auto">
            <Text size="38px" fw="600">
              Enter the OTP code
            </Text>
            <Text w="70%" m="auto" mt="10px">
              Masukkan 6 digit kode OTP yang kami kirim ke(+628)987654321
            </Text>
            <Button variant="transparent" onClick={() => router.push("/login")}>
              Kirim ulang OTP
            </Button>
            <Box mt="30px">{printForm()}</Box>
          </Box>
        </Box>
      </Flex>

      <Flex align="center" visibleFrom="md" hiddenFrom="lg">
        <Box className="auth-container">
          <Image
            src={ImageAuth}
            alt="kirei"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box w="55%">
          <Box ta="center" w="80%" m="auto">
            <Text size="38px" fw="600">
              Enter the OTP code
            </Text>
            <Text w="70%" m="auto" mt="10px">
              Masukkan 6 digit kode OTP yang kami kirim ke(+628)987654321
            </Text>
            <Button variant="transparent" onClick={() => router.push("/login")}>
              Kirim ulang OTP
            </Button>
            <Box mt="30px">{printForm()}</Box>
          </Box>
        </Box>
      </Flex>
      
      <Box ta="center" px="50px" py="50px" w="100%" m="auto" hiddenFrom="md" visibleFrom="sm">
        <Text size="26px" fw="600">
          Enter the OTP code
        </Text>
        <Text w="70%" m="auto" mt="10px">
          Masukkan 6 digit kode OTP yang kami kirim ke(+628)987654321
        </Text>
        <Button variant="transparent" onClick={() => router.push("/login")}>
          Kirim ulang OTP
        </Button>
        <Box mt="20px">{printForm()}</Box>
      </Box>

      <Box ta="center" px="20px" py="30px" w="100%" m="auto" hiddenFrom="sm" className="auth-container">
        <Text size="26px" fw="600">
          Enter the OTP code
        </Text>
        <Text mt="15px">
          Masukkan 6 digit kode OTP yang kami kirim ke(+628)987654321
        </Text>
        <Button variant="transparent" onClick={() => router.push("/login")}>
          Kirim ulang OTP
        </Button>
        <Box mt="20px">{printForm()}</Box>
      </Box>
    </Box>
  );
};

export default SignupOTP;
