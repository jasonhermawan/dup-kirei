import { Box, Flex, Group, Skeleton, Stack } from '@mantine/core'
import React from 'react'
import "./aboutLoader.css"
import HeroAppLoader from '@/components/HeroAppLoader'

const AboutLoader = () => {
  return (
    <Box className='about-page-loader'>
      <Flex className="first-content">
        <Stack className='content-text layout' py={150} justify='center'>
          <Skeleton w={"50%"} h={28} mb={10} />
          <Skeleton w={"75%"} h={24} />
          <Skeleton w={"75%"} h={24} />
          <Skeleton w={"50%"} h={24} />
        </Stack>
        <Skeleton className='img-skel' h={500} />
      </Flex>

      <Stack className='second-content' bg={"#293D48"} c={"white"} mah={"80vh"} style={{overflow: "visible"}} mb={250}>
        <Group className='layout' my={80} w={"100%"} justify='space-between' align='start'>
          <Stack className='content-text' pt={20}>
            <Skeleton w={"100%"} h={16} />
            <Skeleton w={"100%"} h={16} />
            <Skeleton w={"70%"} h={16} />
          </Stack>
          <Stack pt={20} w={"40%"} visibleFrom='sm'>
            <Skeleton w={"100%"} h={16} />
            <Skeleton w={"100%"} h={16} />
            <Skeleton w={"70%"} h={16} />
          </Stack>
        </Group>
        <Skeleton className='img-skel' w={"100vw"} maw={"800px"} mih={"450px"} m={"auto"}/>
      </Stack >

      <HeroAppLoader/>
    </Box >
  )
}

export default AboutLoader