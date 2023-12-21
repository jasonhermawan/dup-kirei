import { Box } from "@mantine/core";
import Image from "next/image";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import classes from "./page.module.css"
import HeroApp from "@/components/HeroApp";

import DeskImage01 from "../../public/home01.png"
import DeskImage02 from "../../public/home02.png"
import DeskImage03 from "../../public/home03.png"
import MobileImage01 from "../../public/mobile-home01.png"
import OutletList from "@/components/OutletList";
import HomeLoginBtn from "@/components/HomeLoginBtn";

const bannerList = [
  { desktop: DeskImage01, mobile: MobileImage01 },
  { desktop: DeskImage02, mobile: "" },
  { desktop: DeskImage03, mobile: "" }
]

export default function Home() {

  return (
    <Box className={classes.mainPage} p={0} style={{ gap: "0px" }} w={"100vw"}>
      <Box className="carousel" display={"flex"} w={"100vw"} h={"100vh"} pos={"relative"}>
        {/* Carousel buat mobile */}
        <Carousel hiddenFrom="md" slideSize="100%" height={"100%"} w={"100%"} controlsOffset="lg" controlSize={50} loop
          classNames={{ control: classes.control }}
          nextControlIcon={<i className="bx bx-chevron-right" style={{ fontSize: "32px" }} />}
          previousControlIcon={<i className="bx bx-chevron-left" style={{ fontSize: "32px" }} />}
        >
          {bannerList.map(({ desktop, mobile }, index) => {
            return <CarouselSlide key={index}>
              <Image
                quality={65}
                src={mobile || desktop}
                alt={`banner${index}`}
                height={"0"}
                width={"0"}
                sizes="100vw"
                style={{ display: "block", height: "100%", width: "100%", objectFit: "cover" }}
              />
            </CarouselSlide>
          })}
        </Carousel>

        {/* Carousel buat desktop */}
        <Carousel visibleFrom="md" slideSize="100%" height={"100%"} w={"100%"} controlsOffset="lg" controlSize={50} loop
          classNames={{ control: classes.control }}
          nextControlIcon={<i className="bx bx-chevron-right" style={{ fontSize: "32px" }} />}
          previousControlIcon={<i className="bx bx-chevron-left" style={{ fontSize: "32px" }} />}
        >
          {bannerList.map(({ desktop, mobile }, index) => {
            return <CarouselSlide key={index}>
              <Image
                quality={65}
                src={desktop}
                alt={`banner${index}`}
                height={"0"}
                width={"0"}
                sizes="100vw"
                style={{ display: "block", height: "100%", width: "100%", objectFit: "cover" }}
              />
            </CarouselSlide>
          })}
        </Carousel>

        <HomeLoginBtn />
      </Box>

      <OutletList />

      <HeroApp />
    </Box>
  )
}
