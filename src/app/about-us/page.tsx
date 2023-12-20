"use client";
import HeroApp from '@/components/HeroApp';
import { Box, Flex, Group, Stack, Text, em } from '@mantine/core'
import Image01 from "../../../public/about01.png"
import Image02 from "../../../public/about02.png"
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image'
import React from 'react'
import AboutLoader from '@/pageLoader/aboutLoader';

const About = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  if (typeof (isMobile) === "boolean") {
    return (
      <Box className='about-page' fz={isMobile ? undefined : 24}>
        <Flex direction={isMobile ? "column" : "row"}>
          <Stack className='layout' py={70} w={isMobile ? undefined : "45%"} justify='center'>
            <Text c={"#38B2F7"} fz={isMobile ? 24 : 28} lts={"2.5px"} fw={isMobile ? undefined : 500}>About Us</Text>
            <Text fz={isMobile ? 32 : 36} lts={"1.08px"} fw={600} pr={40}>The 1st Premium Eco-Laundromart in Indonesia</Text>
          </Stack>
          <Image
            src={Image01}
            alt="kirei-store"
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: isMobile ? "100vw" : "55%", height: "auto", }}
          />
        </Flex>

        <Stack bg={"#293D48"} c={"white"} mah={"80vh"} mb={250}>
          <Group className='layout' my={80} w={"100%"} justify='space-between' align='start'>
            <Stack pt={20} lts={"1.08px"} w={isMobile ? undefined : "40%"}
              style={{
                borderTop: isMobile ? "none" : "3px solid white",
                borderImage: "linear-gradient(to right, #FFF 50%, transparent 50%) 100% 1",
              }}
            >
              <Text fw={isMobile ? undefined : 500} fz={isMobile ? "1em" : "0.75em"}>Elevating the standard of “Laundry Kiloan” by introducing #DailyKiloEcoWash.</Text>
              <Text fw={isMobile ? undefined : 500} fz={isMobile ? "1em" : "0.75em"}>The 1st to introduce pre and post washing processes to achieve desired premium quality.</Text>
            </Stack>
            <Stack pt={20} display={isMobile ? "none" : undefined} lts={"1.08px"} w={isMobile ? undefined : "40%"} gap={2}>
              <Text fw={isMobile ? undefined : 500} fz={isMobile ? "1em" : "0.75em"}>The 1st to bring eco-laundry concept by using eco-friendly detergent and reusable eco-packaging.</Text>
              <Text fw={isMobile ? undefined : 500} fz={isMobile ? "1em" : "0.75em"}>Try #DailyKiloEcoWash today.</Text>
            </Stack>
          </Group>
          <Image
            src={Image02}
            alt="washing-machines"
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: "100vw", maxWidth: "800px", height: "100vh", maxHeight: "450px", objectFit: "cover", margin: "auto", borderRadius: isMobile ? "0px" : "60px" }}
          />
        </Stack >

        <HeroApp />
      </Box >
    )
  } else {
    return (
      <AboutLoader />
    )
  }
}

export default About;