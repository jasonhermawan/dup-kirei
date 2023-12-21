"use client";
import { Box, Button, Group, Menu, Stack, Text } from "@mantine/core";
import OutletCard from "@/components/OutletCard";
import Image from "next/image";
import { useState } from "react";
import classes from "./outletList.module.css"


const dataOutlet = [
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

const OutletList = () => {
    const [opened, setOpened] = useState(false);
    const [selectedCity, setSelectedCity] = useState(0);

    const cityList = dataOutlet.map(({ city }, index) => {
        return <Menu.Item
            onClick={() => { setSelectedCity(index) }}
            key={index}
            leftSection={<i className="bx bx-buildings" style={{ fontSize: "18px" }} />}
        >
            {city}
        </Menu.Item>
    });

    return <Box className="outlet-list" h={"100vh"} mah={"800px"} pos={"relative"} style={{overflow:"clip"}}>
        <Image
            src="/home-leaf.png"
            alt="hero-img"
            height={"0"}
            width={"0"}
            sizes="100vw"
            style={{ display: "block", height: "100%", width: "100%", objectFit: "cover", position: "absolute", zIndex: "-9999", filter: "opacity(100%) blur(1.8px)" }}
        />
        <Stack className={`${classes.content} layout`} h={"100%"}>
            <Stack className={`${classes.text}`}>
                <Text fw={600} pr={"40%"} fz={"1.1em"}>Pioneering Eco-Friendly Laundry in Indonesia</Text>
                <Text fw={600} fz={"2.25em"} lts={1}>25 Outlets at 12 Cities Across Country</Text>
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
                        <Group className={classes.locationBtn} gap={1} align="center">
                            <Text className={classes.text} fw={700} w={"fit-content"} style={{ padding: "0px", lineHeight: "normal", cursor: "pointer" }}>{dataOutlet[selectedCity].city}</Text>
                            <i className="bx bx-chevron-down" />
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
                <Group className={`${classes.outletsContainer} rm-scrollbar`}>
                    {dataOutlet[selectedCity].outlets.map((value, index) => {
                        return <OutletCard key={index} name={value.name} address={value.address} fz={"16px"} />
                    })}
                </Group>
            </Stack>
        </Stack>
    </Box>
}

export default OutletList;