"use client";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";

const HomeLoginBtn = () => {
    const router = useRouter()
    return (
        <Button pos={"absolute"} hiddenFrom="md" variant="outline" color="white"
            fw={500} size="md" bottom={40} left={20} right={20} m={"auto"}
            onClick={() => { router.push("/login") }}
        >Login
        </Button>
    )
}

export default HomeLoginBtn;