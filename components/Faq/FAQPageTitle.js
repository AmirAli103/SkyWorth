import React from 'react';
import { Box, Typography, } from '@mui/material';


const FAQPageTitle = ({ title }) => {
    return (
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
                {title}
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
    );
};

export default FAQPageTitle;
