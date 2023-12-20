import HeroAppLoader from '@/components/HeroAppLoader'
import { Box, Skeleton, Stack } from '@mantine/core'
import React from 'react'

const HomeLoader = () => {
  return (
    <Box className='home-page-loader'>
      <Skeleton h={"100vh"} w={"100vw"} />

      <Box className='outlet-list' h={"100vh"} w={"100vw"} style={{ borderBottom: "2px solid #e0e0e0" }}>
        <Stack h={"100%"} pt={100} pb={60} c={"white"} justify="space-between" className="layout">
          <Stack gap={40} >
            <Stack>
              <Skeleton w={"80%"} h={21} />
              <Skeleton w={"60%"} h={21} />
            </Stack>
            <Stack>
              <Skeleton w={"80%"} h={26} />
              <Skeleton w={"80%"} h={26} />
              <Skeleton w={"80%"} h={26} />
            </Stack>
          </Stack>
          <Stack>
            <Skeleton w={"60%"} h={24} />
            <Skeleton w={"100%"} h={200} />
          </Stack>
        </Stack>

      </Box>
      <HeroAppLoader />
    </Box>
  )
}

export default HomeLoader