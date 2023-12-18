import React from "react";
import { usePathname } from "next/navigation";
import { Text } from "@mantine/core";
import Link from "next/link";

type LinkProps = {
  params: string,
  title: string
}

const HeaderLinks = ({params, title} : LinkProps) => {
  const pathname = usePathname();
  const linkStyle = { textDecoration: "none", color: "black" };
  const activeStyle = { textDecoration: "none", color: "black" };

  return (
    <Link
      href={params}
      style={pathname === params ? activeStyle : linkStyle}
    >
      <Text size="16px" fw="500">{title}</Text>
    </Link>
  );
};

export default HeaderLinks;
