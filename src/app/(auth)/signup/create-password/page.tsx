"use client"
import { Box, Button, Checkbox, Flex, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import ImageAuth from "../../image-auth.png";
import InputForm from "@/components/InputForm";
import "../../auth.css";
import { useRouter } from "next/navigation";
import PassInput from "@/components/PassInput";

const CreatePassword = () => {
  const router = useRouter();
  const printForm = () => {
    return (
      <>
        <PassInput
          label="Password"
          placeholder="Enter your password"
          width="100%"
        />
        <PassInput
          label="Password Confirmation"
          placeholder="Confirm your password"
          width="100%"
        />
        <Text color="rgba(134, 142, 150, 1)" size="12px" mt="15px" lh="15px">
          The password must contain a minimum of 8 characters, including 1 uppercase letter, 1 number, and 1 symbol.
        </Text>
        <Box visibleFrom="sm">
          <Button mt="55px" w="100%" size="md" onClick={() => router.push("/")}>
            Continue
          </Button>
          <Text ta="center" mt="10px">
            Already have an account? <span style={{cursor: "pointer", fontWeight: "600"}} onClick={() => router.push("/login")}>Log in</span>
          </Text>
        </Box>
        <Box hiddenFrom="sm" pos="absolute" bottom="20px" right="20px" left="20px">
          <Button mt="55px" w="100%" size="md" onClick={() => router.push("/")}>
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
              Create Password
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
            Create Password
            </Text>
            <Box mt="50px">{printForm()}</Box>
          </Box>
        </Box>
      </Flex>

      <Box px="50px" py="50px" w="100%" m="auto" hiddenFrom="md" visibleFrom="sm">
        <Text size="26px" fw="600">
          Create Password
        </Text>
        <Box mt="20px">{printForm()}</Box>
      </Box>

      <Box px="20px" py="30px" w="100%" m="auto" hiddenFrom="sm" className="auth-container">
        <Text size="26px" fw="600">
          Create Password
        </Text>
        <Box mt="20px">{printForm()}</Box>
      </Box>
    </Box>
  );
};

export default CreatePassword;