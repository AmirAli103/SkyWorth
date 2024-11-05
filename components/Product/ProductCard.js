import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
const ProductCard = ({ product, onClick, handleNavigation }) => {
    const [hover, setHover] = useState(false);
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);
    return (
        <Card
            sx={{
                maxWidth: 345,
                minHeight: { sm: "220px", md: '330px', lg: "300px", xl: '300px' },
                boxShadow: 'none',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'center'
            }}
            onClick={handleNavigation}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        >
            <Box
                sx={{
                    position: 'relative',
                    cursor: 'pointer',
                    '&:hover img': {
                        // boxShadow: '0 1px 0px rgba(11, 95, 1, 0.5)',
                    },
                }}
            >
                <CardMedia
                    component="img"
                    image={product.image[0]}
                    alt={product.name}
                    sx={{
                        height: 'auto',
                        width: '100%',
                        objectFit: 'contain',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                />
            </Box>
            <CardContent
                sx={{
                    flexGrow: 1,
                    cursor: 'pointer',
                    alignSelf: 'center',
                }}
            >
                <Typography
                    sx={{
                        fontSize: "18px",
                        textAlign: 'center',
                        fontFamily: 'Kanit',
                        fontWeight: '300',
                        cursor: 'pointer'
                    }}
                    component="div"
                >
                    {product.name}
                </Typography>
            </CardContent>
            <Box sx={{ marginTop: 'auto', padding: '20px 0' }}>
                <Button
                    variant="outlined"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                        fontSize: '14px',
                        borderRadius: '50px',
                        borderWidth: '1px',
                        borderColor: '#212121',
                        textTransform: 'none',
                        border: '0.7px solid black',
                        backgroundColor: 'white',
                        color: '#212121',
                        fontFamily: 'Kanit',
                        fontWeight: '300',
                        padding: '10px 30px',
                        '&:hover': {
                            backgroundColor: '#016AC8',
                            color: '#fff',
                        },
                    }}
                >
                    View Product
                </Button>
            </Box>
        </Card>
    );
};

export default ProductCard;
