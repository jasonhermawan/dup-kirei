"use client"
import { Box, Button, Checkbox, Flex, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import ImageAuth from "../image-auth.png";
import InputForm from "@/components/InputForm";
import "../auth.css";
import { useRouter } from "next/navigation";
import PassInput from "@/components/PassInput";

const Login = () => {
  const router = useRouter()
  const printForm = () => {
    return (
      <>
        <InputForm
          label="Email or Phone Number"
          placeholder="Enter your email or phone number"
          width="100%"
        />
        <PassInput
          label="Password"
          placeholder="Enter your password"
          width="100%"
        />
        <Button mt="15px" variant="transparent" p="0px">
          Forgot Password
        </Button>
        <Box visibleFrom="sm">
          <Button mt="35px" w="100%" size="md">
            Login
          </Button>
          <Text ta="center" mt="10px">
            Don't have an account? <span style={{cursor: "pointer", fontWeight: "600"}} onClick={() => router.push("/signup")}>Sign Up</span>
          </Text>
        </Box>
        <Box hiddenFrom="sm" pos="absolute" bottom="20px" right="20px" left="20px">
          <Button mt="35px" w="100%" size="md">
            Login
          </Button>
          <Text ta="center" mt="10px">
            Don't have an account? <span style={{cursor: "pointer", fontWeight: "600"}} onClick={() => router.push("/signup")}>Sign Up</span>
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
              Welcome Back 👋
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
              Welcome Back 👋
            </Text>
            <Box mt="50px">{printForm()}</Box>
          </Box>
        </Box>
      </Flex>
      <Box px="50px" py="50px" w="100%" m="auto" hiddenFrom="md" visibleFrom="sm">
        <Text size="26px" fw="600">
          Welcome Back 👋
        </Text>
        <Box mt="20px">{printForm()}</Box>
      </Box>

      <Box px="20px" py="30px" w="100%" m="auto" hiddenFrom="sm" className="auth-container">
        <Text size="26px" fw="600">
          Welcome Back 👋
        </Text>
        <Box mt="20px">{printForm()}</Box>
      </Box>
    </Box>
  );
};

export default Login;
