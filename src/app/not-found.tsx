import { Box, Button, Flex, Text } from "@mantine/core";
import Image from "next/image";
import Illustration from "../../public/404-illustration.jpg"
import Link from "next/link";

export default function NotFound() {
  return (
    <Box className="layout" w="100%" h="90vh" bg="white" pt="50px">
      <Flex direction="column" align="center" visibleFrom="sm">
        <Image 
          src={Illustration}
          alt="404"
          width="500"
        />
        <Text ta="center" size="32px" mb="15px" fw="700">Something went wrong.</Text>
        <Text ta="center" size="20px" mb="35px" fw="500" lh="25px">Sorry, We can't find the page you're looking for.</Text>
        <Link href="/">
          <Button>Back to home</Button>
        </Link>
      </Flex>
      <Flex direction="column" align="center" hiddenFrom="sm">
        <Image 
          src={Illustration}
          alt="404"
          width="300"
        />
        <Text ta="center" size="26px" mb="15px" fw="700">Something went wrong.</Text>
        <Text ta="center" size="18px" mb="35px" fw="500" lh="25px">Sorry, We can't find the page you're looking for.</Text>
        <Link href="/">
          <Button>Back to home</Button>
        </Link>
      </Flex>
    </Box>
  )
}