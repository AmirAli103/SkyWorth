import React from "react";
import { Box } from "@mui/material";
import Search from "../../components/Faq/Search";
import FAQList from "../../components/Faq/FAQList";
import Refrig from "../../components/Faq/Refrig";
import BackgrondImages from './../../assets/select.jpg'
import LeftAlignedBoxWithBackground from "../../components/Home/LeftAlignedBoxWithBackground";
import { useRouter } from 'next/router';
import AboutImage from './../../assets/AboutMainImage.jpg';

function Faq() {
  const router = useRouter();
  const handleLearnMore = () => {
    router.push("/product");
  };
  return (
    <Box>
      <LeftAlignedBoxWithBackground title={" "} Imageheight={{ xs: "400px", md: "500px" }} backgroundImage={AboutImage} />
      {/* <Search /> */}
      <FAQList />
      {/* <Refrig /> */}
      <Box sx={{ mt: 7 }}>
        <LeftAlignedBoxWithBackground
          bordershown={true}
          backgroundImage={BackgrondImages}
          buttonText={"View All SKYWORTH TVs"}
          onClick={handleLearnMore}
        />
      </Box>

      {/* <Machine/>
      <Freezer/> */}
    </Box>
  );
}

export default Faq;
