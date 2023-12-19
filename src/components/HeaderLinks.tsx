"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Text, em } from "@mantine/core";
import Link from "next/link";
import { useMediaQuery } from "@mantine/hooks";

type LinkProps = {
  params: string,
  title: string
}

const HeaderLinks = ({ params, title }: LinkProps) => {
  const pathname = usePathname();
  const linkStyle = { textDecoration: "none", color: "black" };
  const activeStyle = { textDecoration: "none", color: "black" };
  const whiteStyle = { textDecoration: "none", color: "white" };
  const isMobile = useMediaQuery(`(max-width: ${em(1184)})`);

  return (
    <Link
      href={params}
      style={pathname === "/" && !isMobile ? whiteStyle : pathname === params ? activeStyle : linkStyle}
    >
      <Text size="16px" fw="500">{title}</Text>
    </Link>
  );
};

export default HeaderLinks;
