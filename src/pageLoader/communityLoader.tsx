import { AspectRatio, Box, Flex, Skeleton } from "@mantine/core";
import React from "react";

const CommunityLoader = () => {
  const printCardSkeleton = () => {
    return (
      <>
        <AspectRatio ratio={1 / 1} mb="30px" w="30%" visibleFrom="lg">
          <Skeleton w="95%" h="95%" />
        </AspectRatio>
        <AspectRatio ratio={1 / 1} mb="30px" w="40%" visibleFrom="sm" hiddenFrom="lg">
          <Skeleton w="95%" h="95%" />
        </AspectRatio>
        <AspectRatio ratio={1 / 1} mb="30px" w="100%" hiddenFrom="sm">
          <Skeleton w="100%" h="100%" />
        </AspectRatio>
      </>
    )
  }
  return (
    <Box className="layout" py="50px" pb="150px">
      <Box w="80%" mb="50px" visibleFrom='lg' >
        <Skeleton w="30%" height={30} mt={6} />
        <Skeleton height={100} mt={20} />
      </Box>
      <Box w="50%" mb="50px" hiddenFrom='lg'>
        <Skeleton w="30%" height={30} mt={6} />
        <Skeleton height={30} mt={20} />
      </Box>
      <Flex wrap="wrap" w="100%" m="auto" justify="center">
        {printCardSkeleton()}
        {printCardSkeleton()}
        {printCardSkeleton()}
        {printCardSkeleton()}
        {printCardSkeleton()}
        {printCardSkeleton()}
      </Flex>
    </Box>
  );
}

export default CommunityLoader