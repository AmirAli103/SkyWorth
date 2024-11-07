import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import BackGround from "../../components/AboutUs/BackGround";
import Vision from "../../components/AboutUs/Vision";
import AllStat from "../../components/AboutUs/AllStat";
import LeftAlignedBoxWithBackground from "../../components/Home/LeftAlignedBoxWithBackground";
import BackgrondImages from './../../assets/aboutImage.jpg'
import AboutImage from './../../assets/AboutMainImage.jpg';
import AboutImageSmall from './../../assets/AboutMainImageSmall.jpg';
import AboutSection from "../../components/AboutUs/AboutSection";
const sections = [
  {
    title: "Mission",
    text: "Dedicated to \ncreating a better life for mankind",
  },
  {
    title: "Vision",
    text: "Become a global leader in smart appliances and information technology",
  },
  {
    title: "Core value",
    text: "Technology leadership, quality first, innovation, efficiency, user first, employee-oriented, and results sharing",
  },
];

function AboutUs() {
  return (
    <Box>
      <LeftAlignedBoxWithBackground title={" "} Imageheight={{ xs: "400px", md: "500px" }} backgroundImage={AboutImage} backgroundImageSmall={AboutImageSmall} />
      <BackGround />
      <Grid container spacing={4} justifyContent={"center"} sx={{ padding: { xs: '0px', sm: '40px' } }}>
        {sections.map((section, index) => (
          <Grid item spacing={3} key={index}>
            <Vision title={section.title} text={section.text} />
          </Grid>
        ))}
      </Grid>
      <AllStat />
      <AboutSection />
      {/* < CustomTimeline /> */}
      {/* <SkyworthSection/> */}
      {/* < BrandValueGrid /> */}
      <LeftAlignedBoxWithBackground backgroundImage={BackgrondImages} title={"SKYWORTH has grown to be one of the Top Global TV brands in the world."} description={"SKYWORTH won two awards from 2023-2024 Global CE Brands & Global TV Brands during CES. SKYWORTH consistently adheres to its original intention, committed to enabling consumers to deeply experience the charm of technology in their lives."} />
    </Box>
  );
}

export default AboutUs;
