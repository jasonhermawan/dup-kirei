"use client";
import { Box, Flex, Stack, Text, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";

const HeroApp = () => {
    const isMobile = useMediaQuery(`(max-width: ${em(768)})`);
    return (
        <Box className="mobile-app-section layout" display={"flex"}
            style={{ flexDirection: isMobile ? "column" : "row", justifyContent: "space-between" }}
        >
            <Flex className="content" direction={"column"} gap={60} pt={isMobile ? 20 : 100} pb={20} w={isMobile ? "100%" : "45%"}>
                <Stack>
                    <Text fz={isMobile ? "2.25em" : "1.8em"} fw={600}>Convenience at Your Fingertips</Text>
                    <Text fz={isMobile ? "1.125em" : "0.7em"} fw={300} c={"#475569"}>In today's fast-paced world, managing your laundry should be as effortless as possible. That's why we've created the Kirei Wash App – your ultimate laundry companion.</Text>
                </Stack>
                <Flex direction={isMobile ? "column" : "row"} gap={"10%"}>
                    <Image
                        src={"/play-store.png"}
                        alt="play-store"
                        height={0}
                        width={0}
                        sizes="100vw"
                        style={{ width: "16vw", minWidth: isMobile ? "300px" : "150px", height: "auto" }}
                    />
                    <Image
                        src={"/app-store.png"}
                        alt="app-store"
                        height={0}
                        width={0}
                        sizes="100vw"
                        style={{ width: "16vw", minWidth: isMobile ? "300px" : "150px", height: "auto" }}
                    />
                </Flex>
            </Flex>
            <Image
                src={"/Iphone-mockup.png"}
                alt="app-mockup"
                height={0}
                width={0}
                sizes="100vw"
                style={{ width: isMobile ? "100vw" : "60vw", maxWidth: "550px", height: "auto", marginBottom: isMobile ? "-40px" : "-60px", marginLeft: isMobile ? "-20px" : "-70px", zIndex: "-9999", objectFit: "cover", position: "relative" }}
            />
        </Box>
    )
}

export default HeroApp;