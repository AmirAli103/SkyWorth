import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Tabs, Tab, Paper, Divider, Link } from '@mui/material';
import { useRouter } from 'next/router';
const FeatureList = ({ features }) => {
    const [showAll, setShowAll] = useState(false);
    const toggleShowAll = () => {
        setShowAll(!showAll);
    };
    const displayedFeatures = showAll ? features : features.slice(0, 3);
    return (
        <Box>
            {displayedFeatures.map((feature, index) => (
                <Box key={index} mb={2}>
                    <Typography variant="body1" fontSize="12px" color={'#5f5C5F'} fontFamily={"kanit"} fontWeight={"300"}>
                        {feature.title}
                    </Typography>
                    {feature.detail.includes(',') ? (
                        <ul style={{
                            margin: 0,
                            paddingLeft: 0,
                            fontSize: '16px',
                            listStyleType: 'none'
                        }}>
                            {feature.detail.split(',').map((detailItem, idx) => (
                                <li key={idx} style={{ color: '#5f5C5F', fontSize: 18, marginBottom: "5px", fontFamily: 'kanit', fontWeight: '250' }}>
                                    {detailItem.trim()}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <Typography variant="body1" style={{ color: '#5f5C5F', fontSize: 18, marginBottom: "5px", fontFamily: 'kanit', fontWeight: '250' }}>
                            {feature.detail}
                        </Typography>
                    )}
                </Box>
            ))}

            {features.length > 4 && (
                <Button onClick={toggleShowAll} sx={{ textTransform: 'none', padding: '0' }}>
                    {showAll ? 'Read Less' : 'Read More'}
                </Button>
            )}
        </Box>
    );
};
const ProductDetailPage = ({ product }) => {
    const [tabValue, setTabValue] = useState(0);
    const router = useRouter();
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    const handleScrollToForm = (e, routePath) => {
        e.preventDefault();
        router.push(routePath);
    };
    return (
        <Box container spacing={4} sx={{ maxWidth: '1200px', margin: { xs: "none", md: 'auto' }, padding: 2 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={0} sx={{ background: 'none', padding: { xs: '0px', md: '16px' } }}>
                        <Tabs
                            value={tabValue}
                            onChange={handleTabChange}
                            indicatorColor="transparent"
                            textColor="inherit"
                            variant="fullWidth"
                            scrollButtons="auto"
                            sx={{
                                borderColor: 'divider',
                                backgroundColor: '#F4F4F4',
                                '& .Mui-selected': {
                                    backgroundColor: 'white',
                                    color: 'blue',
                                    borderTop: '3px solid #016AC8',
                                },
                                '& .MuiTab-root': {
                                    color: 'black',
                                },
                            }}
                        >
                            <Tab label="Product Overview" sx={{ fontSize: { xs: 10, md: 14 }, fontWeight: 500 }} />
                            <Tab label="Specifications" sx={{ fontSize: { xs: 10, md: 14 }, fontWeight: 500 }} />
                        </Tabs>

                        <Box sx={{ padding: '16px 30px', borderLeft: '1px solid #e0e0e0', borderRight: '1px solid #e0e0e0', background: 'white', borderBottom: '1px solid #e0e0e0', flex: 1, textAlign: { xs: 'justify', sm: 'justify', } }}>
                            {tabValue === 0 && (
                                <Typography variant="body1" fontSize={'14px'} fontWeight={"300"} paragraph >
                                    {product?.overview}
                                </Typography>

                            )}
                            {tabValue === 1 && (
                                <FeatureList features={product?.specifications} />
                            )}
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} sx={{ paddingRight: { md: 0, lg: '7%' }, marginTop: "20px" }}>
                    <Typography variant="body2">
                        <Link href="#" underline="none" color="inherit" sx={{ marginX: '8px', fontSize: '16px' }} fontWeight={"300"} onClick={(e) => handleScrollToForm(e, '/WarrentyPolicy#form')}>
                            Warranty Registration
                        </Link>
                        |
                        <Link
                            href="#"
                            underline="none"
                            color="inherit"
                            sx={{ marginLeft: '8px', fontSize: '16px' }}
                            fontWeight="300"
                            onClick={(e) => handleScrollToForm(e, '/contactUs#feedback-form')}
                        >
                            Customer Service
                        </Link>
                    </Typography>
                    <Divider sx={{ marginY: 2 }} />
                    <Box sx={{ border: '2px solid #cccccc', borderRadius: '0px', marginTop: '30px', }}>
                        <Box sx={{ flex: 1, padding: { xs: '20px 0px 10px 10px', md: '40px 0px 10px 30px' } }}>
                            <Typography variant="h6" fontSize={"22px"} fontFamily={'SKSans,sans-serif'} fontWeight={"300"} gutterBottom>
                                Have A Question?
                            </Typography>
                            <Typography variant="body2" fontSize={'14px'} fontWeight={"300"} fontFamily={'SKSans,sans-serif'} paragraph>
                                Our experts are ready to help you with any questions you have.
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', }}>
                                <Button href='./../contactUs' sx={{
                                    fontSize: { sm: '10px', md: '12px', lg: '14px' }, padding: { sm: '12px 30px' }, border: '1.5px solid #cccccc', color: '#00000090', borderRadius: 30, marginTop: '10px', alignSelf: 'center', '&:hover': {
                                        backgroundColor: '#016AC8',
                                        color: '#fff',
                                    },
                                }} fontFamily={'SKSans,sans-serif'}>
                                    Contact Us
                                </Button>

                                <Box sx={{ flexShrink: 0, display: 'flex', alignItems: 'flex-end', alignSelf: 'flex-end' }}>
                                    <img src="https://www.skyworthusa.com/cdn/shop/files/support-chat_172x_crop_center.png?v=1688406493" alt="Customer Support" style={{ maxWidth: '150px', height: 'auto' }} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductDetailPage;
