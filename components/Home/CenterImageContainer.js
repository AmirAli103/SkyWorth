import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
const CenteredImageWithText = ({ imageSrc, text, body, body2, ButtonText, heading,onClick }) => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'white',
                width: '100%',
                height: 'auto',
                borderRadius: 2
            }}
        >
            {heading && <Typography variant="h4" sx={{ fontWeight: 'light', padding: '10px',marginTop:'20px' }}  gutterBottom>
                {heading}
            </Typography>}
            {imageSrc && <Image
                src={imageSrc}
                alt="Centered"
                style={{
                    width: "100%",
                    objectFit: 'contain',
                    marginBottom: '40px'
                }}
            />}
            {text && <Typography
                sx={{
                    fontSize: '1.5rem',
                    color: '#0c3034',
                    fontWeight: 400,
                    textAlign: 'center',
                    textTransform:'capitalize',
                    marginTop: body2 ? '70px' : '20px',
                    padding:{xs:"0px 10px",md:0}
                }}
            >
                {text}
            </Typography>}
            {body && <Typography
                component="div"
                sx={{
                    width:  "80%",
                    fontWeight: 250,
                    fontSize: '1.1rem',
                    textAlign: {xs:'left',md:'center'},
                    marginTop: '10px',
                    marginBottom: body2 ? 0 : '30px'
                }}
            >
                {body}
            </Typography>}
            {body2 && <Typography
                component="div"
                sx={{
                    width:  "80%",
                    fontWeight: 250,
                    fontSize: '1.1rem',
                    textAlign: {xs:'left',md:'center'},
                    marginBottom: '30px'
                }}
            >
                {body2}
            </Typography>}
            {ButtonText && <Button
                variant="outlined"
                onClick={onClick}
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
