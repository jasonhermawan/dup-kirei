import { Box, Input, PasswordInput, Text } from "@mantine/core";
import React from "react";

type InputProps = {
  width: string,
  mr?: string,
  ml?: string,
  label: string,
  placeholder: string,
}

const PassInput = ({width, mr, ml, label, placeholder} : InputProps) => {
  return (
    <Box w={width} mt="15px" mr={mr} ml={ml}>
      <Text color="rgba(52, 64, 84, 1)" mb="5px">
        {label}
      </Text>
      <PasswordInput bg="white" placeholder={placeholder} size="md" />
    </Box>
  );
};

export default PassInput;
