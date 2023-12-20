"use client";
import AboutLoader from "@/pageLoader/aboutLoader";
import CommunityLoader from "@/pageLoader/communityLoader";
import HomeLoader from "@/pageLoader/homeloader";
import PartnershipLoader from "@/pageLoader/partnershipLoader";
import ServiceLoader from "@/pageLoader/serviceLoader";
import { Loader } from "@mantine/core";
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
  } else {
    return <Loader color="blue" />;
  }
}
