import { Box, Flex, Skeleton, Text } from '@mantine/core'
import React from 'react'

const PartnershipLoader = () => {
  const printFormSkeleton = () => {
    return (
      <>
        <Skeleton w="30%" h="50px" mb="20px"/>
        <Skeleton w="80%" h="30px"/>
        <Skeleton w="100%" h="50px" mt="50px"/>
        <Skeleton w="100%" h="50px" mt="20px"/>
        <Skeleton w="100%" h="50px" mt="20px"/>
        <Skeleton w="100%" h="50px" mt="20px"/>
        <Skeleton w="100%" h="80px" mt="20px"/>
      </>
    )
  }
  return (
    <Box mih="100vh">
      <Flex className='layout' w="95%" m="auto" pt="50px" pb="50px" align="center">
        <Box w="55%" visibleFrom='sm'>
          {printFormSkeleton()}
        </Box>
        <Box w="100%" hiddenFrom='sm'>
          {printFormSkeleton()}
        </Box>
        <Box w="45%" pl="100px" visibleFrom='md'>
          <Skeleton w="100%" h="600px"/>
        </Box>
        <Box w="45%" pl="50px" visibleFrom='sm' hiddenFrom='md'>
          <Skeleton w="100%" h="400px"/>
        </Box>
      </Flex>
    </Box>
  )
}

export default PartnershipLoader