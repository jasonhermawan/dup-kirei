import ServiceCard from '@/components/ServiceCard'
import { Box, Flex, Text } from '@mantine/core'
import React from 'react'

const Services = () => {
  const printServiceCard = () => {
    return (
      <>
         <ServiceCard 
          image="https://i0.wp.com/kireiwash.com/wp-content/uploads/2021/06/Picture2.png?fit=460%2C370&ssl=1"
          title='Daily Kilo Eco Wash'
          price={11000}
          unit='Kilo'
        >
          <Text color='rgba(102, 112, 133, 1)'>Include Full Services: <br />- PRE wash treatment<br />- ECO wash<br />- POST wash treatment<br />- ECO pack</Text>
        </ServiceCard>
        <ServiceCard 
          image="https://i0.wp.com/kireiwash.com/wp-content/uploads/2021/06/Picture3.png?fit=460%2C370&ssl=1"
          title='Delicate Wash'
          price={35000}
          unit='Pieces'
        >
          <Text color='rgba(102, 112, 133, 1)'>We provide Delicate Wash that offers more detailed washing and caring for your laundries - Tops, Bottoms, Overalls, Batik, Silk, etc. </Text>
        </ServiceCard>
        <ServiceCard 
          image="https://i1.wp.com/kireiwash.com/wp-content/uploads/2021/06/Picture5.png?fit=460%2C360&ssl=1"
          title='Household Wash'
          price={45000}
          unit='Pieces'
        >
          <Text color='rgba(102, 112, 133, 1)'>We provide Household Wash that offers professional cleaning for your Bedcover, Curtain, Carpet, etc.</Text>
        </ServiceCard>
        <ServiceCard 
          image="https://i0.wp.com/kireiwash.com/wp-content/uploads/2021/06/Picture6.png?fit=460%2C360&ssl=1"
          title='Baby Kilo Wash'
          price={20000}
          unit='Kilo'
        >
          <Text color='rgba(102, 112, 133, 1)'>We provide gentle and professional wash for your babies' clothes, apparels, strollers, car seats, and anything beyond.</Text>
        </ServiceCard>
      </>
    )
  }
  return (
    <Box className='layout' py="50px" pb="150px">
      <Box ta="center" mb="50px" visibleFrom='xl'>
        <Text size='32px' mb="25px" fw="700" color='rgba(56, 178, 247, 1)' lts="-0.5px">Our Services</Text>
        <Text size='34px' fw="500" lts="-0.5px">Your Laundry is about to Help Our Earth and Ocean!</Text>
      </Box>
      <Box ta="center" hiddenFrom='xl' visibleFrom='lg' mb="35px">
        <Text size='28px' mb="18px" fw="700" color='rgba(56, 178, 247, 1)' lts="-0.5px">Our Services</Text>
        <Text size='32px' fw="500" lts="-0.5px" lh="42px">Your Laundry is about to Help Our Earth and Ocean!</Text>
      </Box>
      <Box hiddenFrom='lg' mb="35px">
        <Text size='20px' mb="18px" fw="700" color='rgba(56, 178, 247, 1)' lts="-0.5px">Our Services</Text>
        <Text size='22px' fw="500" lts="-0.5px" lh="32px">Your Laundry is about to Help Our Earth and Ocean!</Text>
      </Box>
      <Flex wrap="wrap" w="90%" m="auto" visibleFrom='md'>
        {printServiceCard()}
      </Flex>
      <Flex wrap="wrap" w="100%" m="auto" hiddenFrom='md'>
        {printServiceCard()}
      </Flex>
    </Box>
  )
}

export default Services