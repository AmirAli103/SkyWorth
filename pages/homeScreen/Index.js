import React from "react";
import ImageSlider from "./../../components/Home/Swiper";
import CenteredImageWithText from "../../components/Home/CenterImageContainer";
import TVProductCard from '../../components/Home/TVProductCard'
import { Container } from '@mui/material';
import BackgrondImages from './../../assets/backgroundImage.webp'
import LeftAlignedBoxWithBackground from "../../components/Home/LeftAlignedBoxWithBackground";
import HomePage1 from './../../assets/HomePage1.jpeg'
import HomePage2 from './../../assets/homePage2.png'
import ResponsiveTVProductGrid from "./CardData";
function HomeScreen() {
  return (
    <div >
      <ImageSlider />
      <CenteredImageWithText
        text="SKYWORTH Pakistan is 100% hold by SKYWORTH Group."
        body="SKYWORTH was established in 1988, with the head office located within Shenzhen High Tech Industrial Park which is honored as “China’s silicon valley”, and has more than 40,000 employees."
        body2="SKYWORTH is a large-scale high-tech corporation mainly engaged in the development and manufacturing of consumer electronics, display devices, digital set top boxes, security monitors, network communication, semi-conductors, refrigerators,washing machines, cell phones and LED lighting etc."
        ButtonText={"Read More"}
      />
      <TVProductCard />
      <Container maxWidth="xl">
        <CenteredImageWithText imageSrc={HomePage1} />
      </Container>
      <Container maxWidth={"lg"}>
      <CenteredImageWithText
        imageSrc={HomePage2}
        text="Say hello to a smarter TV"
        body="Simplify your entertainment experience with Android TV. Discover 700,000+* movies and shows in one place. Ask Google to control your TV with your voice. And cast your photos, videos, and music from devices to your TV easily with Chromecast built-in."
        ButtonText={"Learn More"}
      />
      </Container>
      <Container maxWidth="xl">
        <ResponsiveTVProductGrid/>
      </Container>
      <LeftAlignedBoxWithBackground backgroundImage={BackgrondImages} buttonText={"Shop All SKYWORTH TVs"} />
    </div>
  );
}

export default HomeScreen;
