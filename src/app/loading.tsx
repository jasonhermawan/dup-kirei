"use client";
import CommunityLoader from "@/pageLoader/communityLoader";
import LoginLoader from "@/pageLoader/loginLoader";
import PartnershipLoader from "@/pageLoader/partnershipLoader";
import ServiceLoader from "@/pageLoader/serviceLoader";
import SignupLoader from "@/pageLoader/signupLoader";
import { Box, Loader } from "@mantine/core";
import { usePathname } from "next/navigation";

export default function Loading() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  } else if (pathname === "/about-us") {
    return null;
  } else if (pathname === "/our-services") {
    return <ServiceLoader />;
  } else if (pathname === "/partnership") {
    return <PartnershipLoader />;
  } else if (pathname === "/eco-community") {
    return <CommunityLoader />;
  } else if (pathname === "/login") {
    return <LoginLoader />;
  } else if (pathname === "/signup") {
    return <LoginLoader />;
  } else if (pathname === "/signup/create-password") {
    return <LoginLoader />;
  } else if (pathname === "/signup/otp") {
    return <SignupLoader />;
  } else {
    return (
     <Box w="50%" m="auto" mt="100px">
      <Loader color="blue" />
     </Box>
    );
  }
}
