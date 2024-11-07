import React from "react";
import { Box, Typography } from "@mui/material";
// import Retailer from "../../components/WhereToBuy/Retailer";
// import EventCard from "../../components/EventsNews/EventCard";
// import EventList from "../../components/EventsNews/EventList";
import BackgrondImages from './../../assets/bottom-1.jpg'
import BackgrondImagesSmall from './../../assets/bottom-1-small.jpg'
import LeftAlignedBoxWithBackground from '../../components/Home/LeftAlignedBoxWithBackground';
import { motion } from "framer-motion";
function NewsEvents() {

  return (
    <Box>
      <LeftAlignedBoxWithBackground backgroundImage={BackgrondImages} backgroundImageSmall={BackgrondImagesSmall} title={"SKYWORTH has grown to be one of the Top Global TV brands in the world."} description={"SKYWORTH won two awards from 2023-2024 Global CE Brands & Global TV Brands during CES. SKYWORTH consistently adheres to its original intention, committed to enabling consumers to deeply experience the charm of technology in their lives."} />
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30vh" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >

          <Typography variant="h4" fontSize={"24px"} fontFamily={"kanit"} color="textSecondary" align="center">
            No News & Events
          </Typography>
        </motion.div>
      </Box>
      {/* <Retailer
        title="No News & Events'" 
        description="Stay informed with the latest headlines, breaking news, and insightful articles on our News and Event page. Discover what’s happening in SKYWORTH community." 
      />
      <EventList/> */}
    </Box>
  );
}

export default NewsEvents;
