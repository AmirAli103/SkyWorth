import React from "react";
import { Box } from "@mui/material";
import LeftAlignedBoxWithBackground from "../../components/Home/LeftAlignedBoxWithBackground";
import backgroundImage from '../../assets/backgroundImage.webp';
import topImage from '../../assets/backgroundImage.jpg';
import topImageSmall from '../../assets/backgroundImagesmall.jpg';
import { useRouter } from "next/router";
import VideoCards from "../../components/media/videocard";
import BackgrondImages from './../../assets/select.jpg'
function WhereToBuy() {
  const router = useRouter();
  const handleLearnMore = () => {
    router.push('/product');
  }
  return (
    <Box>
      <LeftAlignedBoxWithBackground
        Imageheight={"450px"}
        title={"SKYWORTH has grown to be one of the Top Global TV brands in the world."}
        description={"SKYWORTH won two awards from 2023-2024 Global CE Brands & Global TV Brands during CES. SKYWORTH consistently adheres to its original intention, committed to enabling consumers to deeply experience the charm of technology in their lives."}
        bordershown={true}
        backgroundImage={topImage}
        backgroundImageSmall={topImageSmall}
      />
      <VideoCards />
      <LeftAlignedBoxWithBackground bordershown={true} backgroundImage={BackgrondImages} buttonText={"View All SKYWORTH TVs"} onClick={handleLearnMore} />
    </Box>
  );
}

export default WhereToBuy;
