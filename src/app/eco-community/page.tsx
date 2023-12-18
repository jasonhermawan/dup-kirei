import CommunityCard from '@/components/CommunityCard'
import { Box, Flex, Text } from '@mantine/core'
import React from 'react'

const Community = () => {
  const printCommunityCard = () => {
    return (
      <>
        <CommunityCard 
          image='https://i1.wp.com/kireiwash.com/wp-content/uploads/2021/06/Picture7.png?fit=595%2C460&ssl=1'
          name='Zero Waste Indonesia'
          title="Indonesia's 1st online platform that promotes zero waste lifestyle."
        />
        <CommunityCard 
          image='https://i1.wp.com/kireiwash.com/wp-content/uploads/2021/07/images-2021-06-19T015856.315.jpeg?fit=400%2C400&ssl=1'
          name='Setali Indonesia'
          title="Sustainable fashion movement through decluttering and thrifting"
        />
        <CommunityCard 
          image='https://i0.wp.com/kireiwash.com/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-30-at-15.51.29.jpeg?fit=554%2C554&ssl=1'
          name='Kertabumi Recycling Center'
          title="Social-entrepreneurship promoting waste management and sustainable lifestyle"
        />
        <CommunityCard 
          image='https://i1.wp.com/kireiwash.com/wp-content/uploads/2021/06/Picture9.png?fit=280%2C216&ssl=1'
          name='Jawa Pos Multimedia'
          title="Local TV station."
        />
        <CommunityCard 
          image='https://i2.wp.com/kireiwash.com/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-30-at-15.52.00.jpeg?fit=554%2C554&ssl=1'
          name='Greeneration Foundation'
          title="A non-governmental organization focusing on waste management issue."
        />
        <CommunityCard 
          image='https://i0.wp.com/kireiwash.com/wp-content/uploads/2022/06/petikine_logo.jpg?fit=1024%2C1024&ssl=1'
          name='Petikine'
          title="Media yang berfokus kepada penyebaran informasi dan edukasi."
        />
        <CommunityCard 
          image='https://i1.wp.com/kireiwash.com/wp-content/uploads/2022/06/WhatsApp-Image-2021-03-19-at-3.12.27-PM-200x200-1.jpeg?fit=200%2C200&ssl=1'
          name='Siklus Indonesia'
          title="Siklus is a non-profit organization working in the area of public health. Siklus was establish in 2010 by NGO professionals"
        />
      </>
    )
  }
  return (
    <Box className='layout' py="50px">
      <Box mb="50px" visibleFrom='xl' w="65%">
        <Text size='36px' mb="25px" fw="700" color='rgba(56, 178, 247, 1)' lts="-0.5px">Eco Community</Text>
        <Text size='42px' fw="500" lts="-0.8px" lh="55px">We actively partner with eco communities, as part of our commitment to promote eco-friendly lifestyle, especially in laundry.</Text>
      </Box>
      <Box hiddenFrom='xl' visibleFrom='lg' mb="35px">
        <Text size='32px' mb="18px" fw="700" color='rgba(56, 178, 247, 1)' lts="-0.5px">Eco Community</Text>
        <Text size='36px' fw="500" lts="-0.5px" lh="48px">We actively partner with eco communities, as part of our commitment to promote eco-friendly lifestyle, especially in laundry.</Text>
      </Box>
      <Box hiddenFrom='lg' mb="35px">
        <Text size='28px' mb="18px" fw="700" color='rgba(56, 178, 247, 1)' lts="-0.5px">Eco Community</Text>
        <Text size='22px' fw="500" lts="-0.5px" lh="32px">We actively partner with eco communities, as part of our commitment to promote eco-friendly lifestyle, especially in laundry.</Text>
      </Box>
      <Flex wrap="wrap" w="90%" m="auto" visibleFrom='md'>
        {printCommunityCard()}
      </Flex>
      <Flex wrap="wrap" w="100%" m="auto" hiddenFrom='md'>
        {printCommunityCard()}
      </Flex>
    </Box>
  )
}

export default Community