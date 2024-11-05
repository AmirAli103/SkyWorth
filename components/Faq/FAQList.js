import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import FAQCard from './FAQCard'; // import the above component

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
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box
            sx={{
              flexGrow: 1,
              height: '2px',
              background: 'linear-gradient(to left, #444, transparent)',
              width: '5%',
              mr: 1,
            }}
          />
          <Typography variant="h4" sx={{ color: '#4d4d4d', textAlign: 'center', fontSize: '28px' }}>
            Browse All The FAQs
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              height: '2px',
              background: 'linear-gradient(to right, #444, transparent)',
              width: '5%',
              ml: 1,
            }}
          />
        </Box>

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
