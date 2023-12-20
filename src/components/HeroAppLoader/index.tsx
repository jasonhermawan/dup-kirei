import { Box, Flex, Skeleton, Stack, Text } from "@mantine/core";
import Image from "next/image";
import classes from "./HeroAppLoader.module.css"

const HeroAppLoader = () => {

    return (
        <Box className={`${classes.wrapper} layout`} display={"flex"}>
            <Flex className={classes.content} direction={"column"} gap={60} pt={20} pb={20}>
                <Stack gap={40}>
                    <Skeleton w={"100%"} h={24} />
                    <Stack>
                        <Skeleton w={"80%"} h={16} />
                        <Skeleton w={"80%"} h={16} />
                        <Skeleton w={"60%"} h={16} />
                    </Stack>
                </Stack>
                <Flex gap={"10px"}>
                    <Skeleton h={100} w={250} radius={"md"} />
                    <Skeleton h={100} w={250} radius={"md"} />
                </Flex>
            </Flex>
            <Skeleton m={0} p={0} w={"100%"} maw={"550px"} h={"450px"} />
        </Box>
    )
}

export default HeroAppLoader;