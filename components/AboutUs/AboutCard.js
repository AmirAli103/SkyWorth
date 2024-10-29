import React, { useState } from "react";
import { Card, CardMedia, Box, Typography } from "@mui/material";
import { keyframes } from '@mui/system';

function AboutCard({ image, descriptions }) {

  const scrollAnimation = keyframes`
    0% { transform: translate3d(0, 70%, 0); }
    100% { transform: translate3d(0, -100%, 0); }
  `;

  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldAnimate = descriptions.length > 8;

  const handleMouseEnter = () => {
    setCurrentIndex(0); 
  };
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '100%', md: '100%', lg: '100%' }, 
        height: 'auto',
        margin: "auto",
        borderRadius: 0,
        mt: 2,
        mb: 0,
        position: "relative",
        overflow: "hidden",
        "&:hover .overlay": {
          opacity: 1,
          backgroundColor: "#0069c8", 
        },
      }}
      onMouseEnter={handleMouseEnter} 
    >
      
      <CardMedia
        component="img"
        image={image} 
        alt="Sample Image"
        sx={{
          width: "100%",
          height: "auto",
          objectFit: "cover", 
        }}
      />

      <Box
        className="overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 255, 0)", 
          opacity: 0, 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "opacity 0.5s ease, background-color 0.5s ease",
          overflow: "hidden",
        }}
      >
       
        <Box
          className="scrolling-text"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            animation: shouldAnimate ? `${scrollAnimation} 20s linear infinite` : 'none', 
            height: "100%",
            width: "100%",
            padding: { xs: "10px", md: "20px" },
            opacity: 1,
          }}
        >
          {descriptions.map((description, index) => (
            <Typography
              key={index}
              variant="body1"
              component="div"
              sx={{
                textAlign: "center",
                fontSize: { xs: "10px", md: "12px" },
                padding: "10px 0", 
                color: "white",
              }}
            >
              {description.text}
            </Typography>
          ))}
        </Box>
      </Box>
    </Card>
  );
}

export default AboutCard;
