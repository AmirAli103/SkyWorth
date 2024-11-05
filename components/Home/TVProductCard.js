import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Container } from '@mui/material';
import Image1 from './../../assets/QLED-mini.jpg';
import Image2 from './../../assets/QLED.jpg';
import Image3 from './../../assets/TV_UHD_Home.jpg';
import Image4 from './../../assets/FHD.jpg';
import { useRouter } from 'next/router';
const tvProducts = [
  {
    title: 'QLED MINI',
    description: 'The Skyworth QLED Mini series delivers a top-tier viewing experience with vivid colors, enhanced brightness and best black levels.',
    image: Image1,
    buttonText: 'Shop OLED TVs',
  },
  {
    title: 'QLED',
    description: 'The Skyworth QLED series offers true colors brilliance at any brightness level ranging from dark to very bright scenes.',
    image: Image2,
    buttonText: 'Shop 4K TVs',
  },
  {
    title: 'UHD',
    description: 'The Skyworth UHD series elevates your entertainment with a stunning display, brightness and clarity for the more intuitive viewing experience.',
    image: Image3,
    buttonText: 'Shop FHD TVs',
  },
  {
    title: 'FHD/HD',
    description: 'The Skyworth FHD/HD series redefines your viewing experience with its stunning colors and full HD crystal-clear clarity.',
    image: Image4,
    buttonText: 'Shop FHD TVs',
  }
];

const TVProductCard = ({ title, description, image, OnClick }) => {
  const router = useRouter();
  const handleCardClick = (title) => {
    router.push({
      pathname: '/product',
      query: { title },
    });

  };
  return (
    <Card
      sx={{
        maxWidth: 335,
        margin: 'auto',
        boxShadow: 'none',
        backgroundColor: 'transparent',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
      }}
      onClick={() => { handleCardClick(title) }}
    >
      <CardMedia
        component="img"
        height="auto"
        image={image.src}
        alt={title}
        sx={{ objectFit: 'contain', padding: { xs: '0px', md: "16px" }, height: '200px' }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography gutterBottom sx={{
          fontSize: '1.5rem',
          color: '#0c3034',
          fontWeight: 400,
          textAlign: 'center',
        }} component="div">
          {title}
        </Typography>
        <Typography sx={{
          fontWeight: 250,
          fontSize: { xs: "1.0rem", md: '1.1rem' },
        }} color="black">
          {description}
        </Typography>
      </CardContent>
      <Button
        variant="outlined"
        sx={{
          marginTop: '16px',
          borderRadius: '10px',
          padding: '10px 20px',
          borderColor: 'black',
          color: '#000',
          fontSize: { xs: "0.8rem", md: '0.8rem' },
          '&:hover': {
            backgroundColor: '#016AC8',
            color: '#fff',
          },
        }}
      >
        View All Products
      </Button>
    </Card>
  );
};

const ResponsiveTVProductGrid = () => {
  return (
    <Container sx={{ marginTop: '56px' }} maxWidth={"xl"}>
      <Typography sx={{
        fontSize: { xs: "1.38rem", md: '1.5rem' },
        color: '#0c3034',
        fontWeight: 400,
        textAlign: 'center',
        textTransform: 'capitalize',
      }} align="center" gutterBottom>
        Choosing the right SKYWORTH TV for you
      </Typography>
      <Grid container spacing={2} justifyContent={{ xs: "center", }}>
        {tvProducts.map((product, index) => (
          <Grid item margin={0} sx={{ marginBottom: '20px' }} key={index}>
            <TVProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ResponsiveTVProductGrid;
