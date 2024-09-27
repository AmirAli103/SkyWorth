import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
const CenteredImageWithText = ({ imageSrc, text, body, body2, ButtonText, heading }) => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'white',
                width: '100%',
                height: 'auto',
                borderRadius: 2, marginBottom: '20px'
            }}
        >
            {heading && <Typography variant="h4" sx={{ fontWeight: 'light', padding: '10px' }} align="center" gutterBottom>
                {heading}
            </Typography>}
            {imageSrc && <Image
                src={imageSrc}
                alt="Centered"
                style={{
                    width: "100%",
                    objectFit: 'contain',
                    marginBottom: '20px'
                }}
            />}
            {text && <Typography
                sx={{
                    fontSize: '1.5rem',
                    color: '#0c3034',
                    fontWeight: 400,
                    textAlign: 'center',
                    marginTop: body2 ? '70px' : '20px'
                }}
            >
                {text}
            </Typography>}
            {body && <Typography
                component="div"
                sx={{
                    width: { sm: "80%", md: "80%", lg: '49%' },
                    fontWeight: 500,
                    fontSize: '1.1rem',
                    textAlign: 'center',
                    marginTop: '10px',
                    marginBottom: body2 ? 0 : '30px'
                }}
            >
                {body}
            </Typography>}
            {body2 && <Typography
                component="div"
                sx={{
                    width: { sm: "80%", md: "80%", lg: '49%' },
                    fontWeight: 500,
                    fontSize: '1.1rem',
                    textAlign: 'center',
                    marginBottom: '30px'
                }}
            >
                {body2}
            </Typography>}
            {ButtonText && <Button
                variant="outlined"
                sx={{
                    fontSize: '16px',
                    borderRadius: '10px',
                    borderWidth: '1px',
                    borderColor: '#212121',
                    textTransform: 'none',
                    border: '0.7px solid black',
                    textAlign: 'center',
                    backgroundColor: 'white',
                    color: '#212121',
                    padding: '10px 20px',
                    '&:hover': {
                        backgroundColor: '#CCCCCC20'
                    }
                }}
            >
                {ButtonText}
            </Button>}
        </Box>
    );
};

export default CenteredImageWithText;
