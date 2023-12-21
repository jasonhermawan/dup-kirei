import { Box, Flex, Stack, Text, } from "@mantine/core";
import Image from "next/image";
import iphoneMockup from "../../../public/Iphone-mockup.png";
import appStore from "../../../public/app-store.png";
import playStore from "../../../public/play-store.png";
import classes from "./heroApp.module.css"

const HeroApp = () => {
    return (
        <Box className={`${classes.heroApp} layout`}>
            <Flex className={classes.content}>
                <Stack className={classes.text}>
                    <Text fz={"2em"} fw={600}>Convenience at Your Fingertips</Text>
                    <Text fw={300} c={"#475569"}>In today's fast-paced world, managing your laundry should be as effortless as possible. That's why we've created the Kirei Wash App - your ultimate laundry companion.</Text>
                </Stack>
                <Flex className={classes.appImg}>
                    <Image
                        src={playStore}
                        alt="play-store"
                        height={0}
                        width={0}
                        sizes="100vw"
                    />
                    <Image
                        src={appStore}
                        alt="app-store"
                        height={0}
                        width={0}
                        sizes="100vw"
                    />
                </Flex>
            </Flex>
            <Image
                className={classes.iphoneMockup}
                src={iphoneMockup}
                alt="app-mockup"
                height={0}
                width={0}
                sizes="100vw"
            />
        </Box>
    )
}

export default HeroApp;