import { AspectRatio, Box, Button, Image, Text } from "@mantine/core";
import React from "react";
import './serviceCard.css'

type ServiceProps = {
  image: string,
  title: string,
  price: number,
  unit: string,
  children: React.ReactNode,
}

const ServiceCard = ({image, title, price, unit, children} : ServiceProps) => {
  return (
    <Box className="service-card">
      <AspectRatio ratio={1 / 1} mb="30px">
        <Image
          src={image}
          w="100%"
          fit="cover"
          alt="service-card"
        />
      </AspectRatio>
      <Text size="20px" fw="500" mb="20px" visibleFrom="lg">{title}</Text>
      <Text size="30px" fw="500" mb="20px" visibleFrom="lg">IDR {price?.toLocaleString()},-<span style={{fontSize: "14px", color: 'rgba(102, 112, 133, 1)', fontWeight: "400"}}> / {unit}</span></Text>
      <Text size="16px" fw="500" mb="20px" hiddenFrom="lg">{title}</Text>
      <Text size="24px" fw="500" mb="20px" hiddenFrom="lg">IDR {price?.toLocaleString()},-<span style={{fontSize: "14px", color: 'rgba(102, 112, 133, 1)', fontWeight: "400"}}> / {unit}</span></Text>
      <Button variant="outline" w="100%" mb="20px">Get Started Now</Button>
      {children}
    </Box>
  );
};

export default ServiceCard;
