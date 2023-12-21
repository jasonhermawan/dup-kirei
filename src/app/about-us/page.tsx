import HeroApp from '@/components/HeroApp';
import { Box, Flex, Group, Stack, Text, em } from '@mantine/core'
import Image01 from "../../../public/about01.png"
import Image02 from "../../../public/about02.png"
import Image from 'next/image'
import React from 'react'
import classes from "./about.module.css";

const About = () => {
    return (
      <Box className={classes.aboutPage}>
        <Flex className={classes.content01}>
          <Stack className={`layout ${classes.text}`} py={70} justify='center'>
            <Text c={"#38B2F7"} fz={"1em"} lts={"2.5px"} fw={500}>About Us</Text>
            <Text fz={"1.3em"} lts={"1.08px"} fw={600} pr={40}>The 1st Premium Eco-Laundromart in Indonesia</Text>
          </Stack>
          <Image
            className={classes.image}
            src={Image01}
            alt="kirei-store"
            height={0}
            width={0}
            sizes="100vw"
          />
        </Flex>

        <Stack className={classes.content02} bg={"#293D48"} c={"white"}>
          <Group className={`layout ${classes.text}`} my={80} w={"100%"} justify='space-between' align='start'>
            <Stack pt={20} lts={"1.08px"}>
              <Text>Elevating the standard of “Laundry Kiloan” by introducing #DailyKiloEcoWash.</Text>
              <Text>The 1st to introduce pre and post washing processes to achieve desired premium quality.</Text>
            </Stack>
            <Stack pt={20} visibleFrom='md' lts={"1.08px"} w={"40%"} gap={2}>
              <Text>The 1st to bring eco-laundry concept by using eco-friendly detergent and reusable eco-packaging.</Text>
              <Text>Try #DailyKiloEcoWash today.</Text>
            </Stack>
          </Group>
          <Image
            className={classes.image}
            src={Image02}
            alt="washing-machines"
            height={0}
            width={0}
            sizes="100vw"
          />
        </Stack >

        <HeroApp />
      </Box >
    )
}

export default About;