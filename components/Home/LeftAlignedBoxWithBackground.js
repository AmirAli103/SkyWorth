import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const LeftAlignedBoxWithBackground = ({ backgroundImage, backgroundImageSmall, buttonText, title, description, onClick, Imageheight }) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: Imageheight ? Imageheight : '420px',
                backgroundImage: backgroundImageSmall != null ? { xs: `url(${backgroundImageSmall.src || backgroundImageSmall})`, sm: `url(${backgroundImageSmall.src || backgroundImageSmall})`, md: `url(${backgroundImage.src || backgroundImage})` } : `url(${backgroundImage.src || backgroundImage})`,
                background: 'linear-gradient(90deg, #000000fe, #0000007 49%, #00000002)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingLeft: { xs: "5%", md: '10%' },
            }}
        >
            <Box
                sx={{
                    padding: '20px',
                    borderRadius: '8px',
                    maxWidth: '600px',
                }}
            >
                {title ? <Typography
                    component="div"
                    sx={{
                        fontWeight: '500',
                        fontSize: { xs: 22, sm: 22, md: 26, lg: 26 },
                        color: 'white',
                        fontFamily: 'kanit',
                        marginBottom: '28px',
                        lineHeight: '1.2',
                    }}
                >
                    {title}
                </Typography> : <Typography
                    component="div"
                    sx={{
                        fontWeight: 'medium',
                        fontSize: { xs: 28, sm: 32, md: 35, lg: 40 },
                        color: 'white',
                        marginBottom: '20px',
                        lineHeight: '1',
                    }}
                >
                    Unmatched Quality and
                    <br />
                    Unbeatable Performance
                </Typography>}
                {description &&
                    <Typography
                        component="div"
                        sx={{
                            fontWeight: '300',
                            fontSize: { xs: 14, sm: 14, md: 16, lg: 16 },
                            color: 'white',
                            fontFamily: 'kanit',
                            marginBottom: '26px',
                            lineHeight: '1.5', display: { xs: 'none', md: 'block' }
                        }}
                    >
                        {description}
                    </Typography>
                }
                {buttonText && <Button
                    variant="contained"
                    onClick={onClick}
                    sx={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        fontWeight: 'light',
                        padding: '8px 15px',

                        borderRadius: '50px',
                        border: '2px solid #CCCCCC',

                        '&:hover': {
                            backgroundColor: '#016AC8',
                            color: 'white',
                            border: '2px solid black',
                        },
                    }}
                >
                    {buttonText}
                </Button>}
            </Box>
        </Box>
    );
};

export default LeftAlignedBoxWithBackground;
