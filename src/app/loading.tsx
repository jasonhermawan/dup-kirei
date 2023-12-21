"use client";
import CommunityLoader from "@/components/PageLoader/communityLoader";
import HomeLoader from "@/components/PageLoader/homeLoader";
import AboutLoader from "@/components/PageLoader/aboutLoader";
import LoginLoader from "@/components/PageLoader/loginLoader";
import PartnershipLoader from "@/components/PageLoader/partnershipLoader";
import ServiceLoader from "@/components/PageLoader/serviceLoader";
import SignupLoader from "@/components/PageLoader/signupLoader";
import { Box, Loader } from "@mantine/core";
import { usePathname } from "next/navigation";

export default function Loading() {
  const pathname = usePathname();

  if (pathname === "/") {
    return <HomeLoader />;
  } else if (pathname === "/about-us") {
    return <AboutLoader />;
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
     <Box w="50px" m="auto" mt="100px">
      <Loader color="blue" />
     </Box>
    );
  }
}
