"use client"
import { Box, Button, Checkbox, Flex, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import ImageAuth from "../image-auth.png";
import InputForm from "@/components/InputForm";
import "../auth.css";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const printForm = () => {
    return (
      <>
        <InputForm
          label="Email"
          placeholder="Enter your email"
          width="100%"
        />
        <InputForm
          label="Phone Number"
          placeholder="Enter your phone number"
          width="100%"
        />
        <Box visibleFrom="sm">
          <Button mt="55px" w="100%" size="md" onClick={() => router.push("/signup/otp")}>
            Continue
          </Button>
          <Text ta="center" mt="10px">
            Already have an account? <span style={{cursor: "pointer", fontWeight: "600"}} onClick={() => router.push("/login")}>Log in</span>
          </Text>
        </Box>
        
        <Box hiddenFrom="sm" pos="absolute" bottom="20px" right="20px" left="20px">
          <Button mt="55px" w="100%" size="md" onClick={() => router.push("/signup/otp")}>
            Continue
          </Button>
          <Text ta="center" mt="10px">
            Already have an account? <span style={{cursor: "pointer", fontWeight: "600"}} onClick={() => router.push("/login")}>Log in</span>
          </Text>
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
          <Box w="60%" m="auto">
            <Text size="38px" fw="600">
              Welcome to Kirei
            </Text>
            <Box mt="50px">{printForm()}</Box>
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
          <Box w="80%" m="auto">
            <Text size="38px" fw="600">
              Welcome to Kirei
            </Text>
            <Box mt="50px">{printForm()}</Box>
          </Box>
        </Box>
      </Flex>

      <Box px="50px" py="50px" w="100%" m="auto" hiddenFrom="md" visibleFrom="sm">
        <Text size="26px" fw="600">
          Welcome to Kirei
        </Text>
        <Box mt="20px">{printForm()}</Box>
      </Box>

      <Box px="20px" py="30px" w="100%" m="auto" hiddenFrom="sm" className="auth-container">
        <Text size="26px" fw="600">
          Welcome to Kirei
        </Text>
        <Box mt="20px">{printForm()}</Box>
      </Box>
    </Box>
  );
};

export default Signup;