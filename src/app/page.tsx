"use client";
import { Box, Button, Group, Menu, Stack, Text, em } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import OutletCard from "@/components/OutletCard";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import classes from "./carousel.module.css"
import { useState } from "react";
import HeroApp from "@/components/HeroApp";

const outletList = [
  {
    city: "Tangerang",
    outlets: [
      { name: "Kirei Wash BSD", address: "Ruko West Park BSD, Jl. Raya Pagedangan No.3 Blok E, BSD City, Kec. Pagedangan, Kabupaten Tangerang, Banten 15339" },
      { name: "Kirei Wash Green Lake City", address: "Ruko Cordoba, Jl. Green Lake City Boulevard No.Blok C, RT.005/RW.008, Petir, Kec. Cipondoh, Kota Tangerang, Banten 15147" },
      { name: "Kirei Wash Karawaci", address: "Ruko Asiatic, Jl. Permata Sari No.5E Blok B15, Lippo, Kec. Karawaci, Kabupaten Tangerang, Banten 15811" },
      { name: "Kirei Wash Bintaro", address: "Jl. Bintaro Utama 9 No.53 Sektor 9, Bintaro Jaya, Pondok Aren, South Tangerang City, Banten 15229" },
    ]
  },
  {
    city: "Jakarta Selatan",
    outlets: [
      { name: "Kirei Wash Pondok Indah", address: "Jl. Ciputat Raya No.2, RT.2/RW.5, Pd. Pinang, Kec. Kby. Lama, Jakarta, Daerah Khusus Ibukota Jakarta 12310" },
      { name: "Kirei Wash Tebet", address: "Jl. Tebet Timur Dalam III E No.1, Tebet Tim., Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12820" },
    ]
  }
];

const bannerList = [
  { desktop: "/home01.png", mobile: "/mobile-home01.png" },
  { desktop: "/home02.png", mobile: "" },
  { desktop: "/home03.png", mobile: "" }
]

export default function Home() {
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);
  const [opened, setOpened] = useState(false);
  const [selectedCity, setSelectedCity] = useState(0);
  const cityList = outletList.map(({ city }, index) => {
    return <Menu.Item
      onClick={() => { setSelectedCity(index) }}
      key={index}
      leftSection={<i className="bx bx-buildings" style={{ fontSize: "18px" }} />}
    >
      {city}
    </Menu.Item>
  });

  if (typeof (isMobile) === "boolean") {
    return (
      <Box className="main-page" p={0} style={{ gap: "0px" }} w={"100vw"} fz={isMobile ? 16 : 24}>
        <Box className="carousel" display={"flex"} bg={"#A18167"} w={"100vw"} h={"100vh"}>
          <Carousel slideSize="100%" height={"100%"} w={"100%"} controlsOffset="lg" controlSize={50} loop
            classNames={{ control: classes.control }}
            nextControlIcon={<i className="bx bx-chevron-right" style={{ fontSize: "32px" }} />}
            previousControlIcon={<i className="bx bx-chevron-left" style={{ fontSize: "32px" }} />}
          >
            {bannerList.map(({ desktop, mobile }, index) => {
              return <Carousel.Slide key={index}>
                <Image
                  src={isMobile ? mobile || desktop : desktop}
                  alt={`banner${index}`}
                  height={"0"}
                  width={"0"}
                  sizes="100vw"
                  style={{ display: "block", height: "100%", width: "100%", objectFit: "cover" }}
                />
              </Carousel.Slide>
            })}
          </Carousel>
        </Box>

        <Box className="outlet-list" h={"100vh"} pos={"relative"} style={{ overflow: "clip" }}>
          <Image
            src="/home-leaf.png"
            alt="hero-img"
            height={"0"}
            width={"0"}
            sizes="100vw"
            style={{ display: "block", height: "100vh", width: "100%", objectFit: "cover", position: "absolute", zIndex: "-9999", filter: "opacity(100%) blur(1.8px)" }}
          />
          <Stack h={"100%"} pt={100} pb={60} c={"white"} justify="space-between" className="layout">
            <Stack gap={isMobile ? 10 : 1}>
              <Text fw={600} pr={"40%"} fz={"1.1em"}>Pioneering Eco-Friendly Laundry in Indonesia</Text>
              <Text fw={600} fz={"2.25em"} lts={1} pr={isMobile ? undefined : "40%"}>25 Outlets at 12 Cities Across Country</Text>
            </Stack>
            <Stack>
              <Menu
                onOpen={() => { setOpened(true) }}
                onClose={() => { setOpened(false) }}
                width={"225px"}
                position="bottom-start"
                shadow="md"
              >
                <Menu.Target>
                  <Group gap={1} align="center" justify={isMobile ? undefined : "space-between"}>
                    <Text fw={700} w={"fit-content"} fz={isMobile ? "1.6em" : "1.4em"} style={{ padding: "0px", lineHeight: "normal", cursor:"pointer" }}>{outletList[selectedCity].city}</Text>
                    <i className="bx bx-chevron-down" style={{ display: isMobile ? "" : "none", fontSize: "2em" }} />
                    <Button visibleFrom="md" color="rgba(38, 39, 38, 0.7)" radius={"xl"} size="md"
                      style={{ border: "1px solid white" }}
                    >
                      Change location
                    </Button>
                  </Group>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Label>Cities</Menu.Label>
                  <Menu.Divider />
                  {cityList}
                </Menu.Dropdown>
              </Menu>
              <Group className="rm-scrollbar" p={0} pr={20} mr={isMobile ? "-20px" : "-70px"} style={{ overflow: "scroll", flexWrap: "nowrap", gap: isMobile ? "10px" : "30px", position: "relative" }}>
                {outletList[selectedCity].outlets.map((value, index) => {
                  return <OutletCard key={index} name={value.name} address={value.address} fz={isMobile ? "14px" : "16px"} />
                })}
              </Group>
            </Stack>
          </Stack>
        </Box>

        <HeroApp />
      </Box>
    )
  }
}
