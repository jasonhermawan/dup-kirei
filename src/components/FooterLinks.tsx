import React from 'react'
import { Text } from "@mantine/core";
import Link from "next/link";

type LinkProps = {
  params: string,
  title: string
}

const FooterLinks = ({params, title} : LinkProps) => {
  return (
    <Link
      href={params}
      style={{ color: "white", textDecoration: "none" }}
    >
      <Text size="14px" fw="300">{title}</Text>
    </Link>
  )
}

export default FooterLinks