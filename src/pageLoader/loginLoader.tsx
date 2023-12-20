import { Box, Flex, Skeleton } from '@mantine/core'
import React from 'react'
import '../app/(auth)/auth.css'

const LoginLoader = () => {
  const printForm = () => {
    return (
      <>
        <Skeleton w="80%" h="50px"/>
        <Skeleton w="100%" h="50px" mt="50px"/>
        <Skeleton w="100%" h="50px" mt="20px" mb="80px"/>
        <Skeleton w="100%" h="50px"/>
      </>
    )
  }
  return (
   <Box>
    <Flex align="center" visibleFrom='md'>
      <Box className='auth-container'>
        <Skeleton w="100%" h="100%" />
      </Box>
      <Box w="55%">
        <Box w="60%" m="auto">
          {printForm()}
        </Box>
      </Box>
    </Flex>
    <Box px="50px" py="50px" w="100%" m="auto" hiddenFrom='md' visibleFrom="sm">
      {printForm()}
    </Box>
    <Box px="20px" py="30px" w="100%" m="auto" hiddenFrom="sm" className="auth-container">
      {printForm()}
    </Box>
   </Box>
  )
}

export default LoginLoader