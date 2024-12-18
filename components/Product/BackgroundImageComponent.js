import React from 'react';
import { Box, Typography } from '@mui/material';

const BackgroundImageComponent = ({ backgroundImage, backgroundImageSmal, title, desc }) => {
  const gradien = `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))`;
  const isSmallScreenImage = backgroundImageSmal != null;
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '300px', sm: '445px', md: '445px', lg: '445px' },
        backgroundImage: isSmallScreenImage ? { xs: `${gradien},url(${backgroundImageSmal?.src})`, md: `${gradien},url(${backgroundImage?.src})` } : `${gradien},url(${backgroundImage?.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: isSmallScreenImage ? { md: 'center' } : 'center',
        justifyContent: 'flex-start',
        marginBottom: { xs: "20px", md: '100px' },

      }}
    >
      <Box sx={{
        color: 'white', zIndex: 1, width: { xs: "45%", sm: "35%", md: '50%', lg: '35%' }, marginLeft: '7%', marginTop: isSmallScreenImage ? { xs: '7%', md: '0%' } :
          ''
      }}>
        <Typography sx={{ fontFamily: 'Kanit', fontWeight: "250", fontSize: { xs: 30, sm: 30, md: 40, lg: 48 }, lineHeight: 1, alignItems: 'left-top' }}>
          {title}
        </Typography>
        <Typography variant="body1" fontFamily={'Kanit'} fontWeight={"250"} sx={{ display: isSmallScreenImage ? { xs: 'none', md: 'block' } : 'block' }}>
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default BackgroundImageComponent;
