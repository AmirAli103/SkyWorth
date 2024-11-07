import { Grid, Box, Button, Typography, ThemeProvider, createTheme } from '@mui/material';
import ContactRow from './../../components/contactUs/contactRow'
import FeedBackForm from '../../components/contactUs/FeedBackForm';
import contactImage2 from './../../assets/contact-us-2.jpg'
import LeftAlignedBoxWithBackground from '../../components/Home/LeftAlignedBoxWithBackground';
import CenteredImageWithText from '../../components/Home/CenterImageContainer';
import TopBanner from './../../assets/Top-Banner.jpg'
import TopBannerSmall from './../../assets/Top-Banner-Small.jpg'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChangeComplete = (url) => {
      if (url.includes('#feedback-form')) {
        const feedbackForm = document.getElementById('feedback-form');
        if (feedbackForm) {
          feedbackForm.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    if (router.asPath.includes('#feedback-form')) {
      const feedbackForm = document.getElementById('feedback-form');
      if (feedbackForm) {
        feedbackForm.scrollIntoView({ behavior: 'smooth' });
      }
    }
    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);
  const theme = createTheme();
  return (
    <Box >
      <LeftAlignedBoxWithBackground title={" "} Imageheight={{ xs: "400px", md: "500px" }} backgroundImage={TopBanner} backgroundImageSmall={TopBannerSmall} />
      <Box>
        <ThemeProvider theme={theme}>
          <ContactRow />
        </ThemeProvider>
        {/* <ContactRow /> */}
        {/* <LocationSection /> */}
        {/* <Section /> */}
        <CenteredImageWithText
          heading={"SKYWORTH GLOBAL HEAD QUARTERS"}
          imageSrc={contactImage2}
        />
        <FeedBackForm id="feedback-form" />
      </Box>
    </Box>
  );
};

export default Index;
