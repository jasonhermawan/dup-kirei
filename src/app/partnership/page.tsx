import { Box, Button, Checkbox, Flex, Input, Text, Textarea } from '@mantine/core'
import React from 'react'
import ImageAsset from './partnership-img.png'
import Image from 'next/image'
import InputForm from '@/components/InputForm'
import './partnership.css'

const Partnership = () => {
  const printForm = () => {
    return (
      <>
        <Flex visibleFrom='sm'>
          <InputForm 
            mr='10px'
            label='First name'
            placeholder='First name'
            width='50%'
          />
          <InputForm 
            ml='10px'
            label='Last name'
            placeholder='Last name'
            width='50%'
          />
        </Flex>
        <Flex hiddenFrom='sm' direction="column">
          <InputForm 
            label='First name'
            placeholder='First name'
            width='100%'
          />
          <InputForm 
            label='Last name'
            placeholder='Last name'
            width='100%'
          />
        </Flex>
        <InputForm 
          label='Email'
          placeholder='you@company.com'
          width='100%'
        />
        <InputForm 
          label='Phone number'
          placeholder='+1 (555) 000-0000'
          width='100%'
        />
        <Box w="100%" mt="15px">
          <Text color='rgba(52, 64, 84, 1)' mb="5px">Message</Text>
          <Textarea />
        </Box>
        <Checkbox label="You agree to our friendly privacy policy" mt="20px" />
        <Button mt="35px" w="100%" size='md'>Submit</Button>
      </>
    )
  }
  return (
  <Box bg="white" mih="100vh">
   <Flex className='layout partnership-layout' m="auto" pt="50px" pb="50px" align="center">
    <Box w="60%" pr="150px" visibleFrom='lg'>
      <Text size='34px' fw="600" mb="10px">Partnership</Text>
      <Text color='rgba(102, 112, 133, 1)' size='18px' lh="28px">For business parnership inquiries, please reach us through email.</Text>
      <Box mt="10px">
        {printForm()}
      </Box>
    </Box>
    <Box w="55%" pr="65px" hiddenFrom='lg' visibleFrom='sm'>
      <Text size='32px' fw="600" mb="10px">Partnership</Text>
      <Text color='rgba(102, 112, 133, 1)' size='18px' lh="28px">For business parnership inquiries, please reach us through email.</Text>
      <Box mt="15px">
        {printForm()}
      </Box>
    </Box>
    <Box w="100%" hiddenFrom='sm'>
      <Text size='26px' fw="600" mb="10px">Partnership</Text>
      <Text color='rgba(102, 112, 133, 1)' size='16px' lh="23px">For business parnership inquiries, please reach us through email.</Text>
      <Box mt="15px">
        {printForm()}
      </Box>
    </Box>
    <Box w="40%" visibleFrom='lg'>
      <Image 
        src={ImageAsset}
        alt='kirei'
        style={{width: "100%", height: "50%", objectFit: "cover"}}
      />
    </Box>
    <Box w="45%" hiddenFrom='lg' visibleFrom='sm'>
      <Image 
        src={ImageAsset}
        alt='kirei'
        style={{width: "100%", height: "50%", objectFit: "cover"}}
      />
    </Box>
   </Flex>
  </Box>
  )
}

export default Partnership