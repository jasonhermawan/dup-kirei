import { Box, Text } from "@mantine/core";

type props = {
    name: string,
    address: string,
    fz: string
}

const OutletCard = ({ name, address, fz }: props) => {

    return (
        <Box className="rm-scrollbar" bg={"rgba(33, 51, 41, 0.97)"} c={"white"}
            h={"200px"} w={"90%"} miw={"360px"} maw={"360px"}
            px={"lg"} py={"md"}
            fz={fz}
            style={{
                display: "flex",
                gap: "3px",
                flexDirection: "column",
                borderRadius: "6px", border: "1px solid #5c5c59",
                overflow: "scroll"
            }}>
            <Text fw={600} fz={"1.4em"}>{name}</Text>
            <Text fz={"1em"}>{address}</Text>
        </Box>
    )
}

export default OutletCard;