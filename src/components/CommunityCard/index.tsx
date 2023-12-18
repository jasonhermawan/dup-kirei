import { AspectRatio, Box, Button, Image, Text } from "@mantine/core";
import React from "react";
import './communityCard.css'

type CommunityProps = {
  image: string,
  name: string,
  title: string,
}

const CommunityCard = ({image, name, title } : CommunityProps) => {
  return (
    <Box className="community-card">
      <AspectRatio ratio={1 / 1} mb="30px">
        <Image
          src={image}
          w="100%"
          fit="cover"
        />
      </AspectRatio>
      <Text color="rgba(37, 99, 235, 1)" size="18px" fw="500" mb="20px" visibleFrom="lg">{name}</Text>
      <Text size="25px" fw="500" mb="5px" visibleFrom="lg" lh="30px" lineClamp={2}>{title}</Text>
      <Text color="rgba(37, 99, 235, 1)" size="14px" fw="500" mb="20px" hiddenFrom="lg">{name}</Text>
      <Text size="20px" fw="500" mb="5px" hiddenFrom="lg" lh="25px" lineClamp={3}>{title}</Text>
      <Button variant="transparent" p="0px" mb="20px" color="rgba(37, 99, 235, 1)" >{"Learn More >>"}</Button>
    </Box>
  );
};

export default CommunityCard;