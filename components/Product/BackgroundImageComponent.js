import React from 'react';
import { Box, Typography } from '@mui/material';

const BackgroundImageComponent = ({ src,title,desc }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: {xs:'300px',sm:'445px',md:'445px',lg:'445px'},
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)),url(${src?.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom:{xs:"20px",md:'100px'}
      }}
    >
      <Box sx={{ color: 'white', zIndex: 1,width:{xs:"90%",sm:"70%",md:'50%',lg:'35%'},marginLeft:'7%', }}>
        <Typography sx={{fontFamily:'Kanit',fontWeight:"250",fontSize:{xs:30,sm:30,md:40,lg:48},lineHeight:1}}>
          {title}
        </Typography>
        <Typography variant="body1" fontFamily={'Kanit'} fontWeight={"250"}>
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default BackgroundImageComponent;
