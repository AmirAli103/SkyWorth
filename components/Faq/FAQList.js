import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import FAQCard from './FAQCard'; // import the above component
import FAQPageTitle from './FAQPageTitle';

const faqData = [
  { title: 'QLED MINI', badgeNumber: 19 },
  { title: 'QLED', badgeNumber: 13 },
  { title: 'UHD', badgeNumber: 10 },
  { title: 'FHD / HD', badgeNumber: 10 },
];

const FAQList = () => {
  return (
    <Container maxWidth="lg" sx={{ maxWidth: '1600px', margin: '0 auto' }}>
      <Box sx={{ mx: 2, mb: 7, mt: 8 }}>
        <FAQPageTitle title='Browse All The FAQs' />
        {/* FAQ Cards */}
        <Grid container spacing={2} sx={{ mt: 5 }}>
          {faqData.map((faq, index) => (
            <Grid item xs={12} sm={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <FAQCard title={faq.title} badgeNumber={faq.badgeNumber} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default FAQList;
