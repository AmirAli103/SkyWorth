import React from 'react';
import { Box, Container, Typography, List, ListItem, Link } from '@mui/material';
import Breadcrumb from './BreadCrumb';

const PrivacyPolicyText = ({
    termsOfServices,
    heading,
    breadcrumb,
    description1,
    description2,
    description3,
    bulletPoints,
    endDescription,
    bulletPointLinks,
    contactInfo,
    strongText,
    mexcio,
    USA,
    textwithLink, link
}) => {
    return (
        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' } }}>
            <Container maxWidth={"xl"}>
                {breadcrumb && <Breadcrumb />}
                <Box sx={{ mb: 3 }}>
                    {heading &&
                        <Typography variant="h1" fontSize={{ xs: '35px', lg: '45px' }} color={"#0c3034"} sx={{ mb: 2, textAlign: termsOfServices ? "center" : "left" }} fontWeight={300} fontFamily={"SKSans, sans-serif"}>
                            {heading}
                        </Typography>}
                    {strongText &&
                        <Typography sx={{ mb: 1 }}>
                            <strong style={{ fontFamily: 'SKSans, sans-serif', fontWeight: 500, fontSize: '21px', }}>
                                {strongText}
                            </strong>
                        </Typography>}
                    {description1 && (
                        <Typography
                            fontSize={{ lg: '17px' }}
                            fontFamily={"SKSans, sans-serif"}
                            sx={{ color: '#0c3034', marginBottom: "20px", fontWeight: 300 }}
                        >
                            {description1.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line.split(' ').map((word, wordIndex) => {
                                        // Check if the word is a URL
                                        const isUrl = word.startsWith('http');
                                        // Check if the word is an email
                                        const isEmail = /\S+@\S+\.\S+/.test(word);

                                        if (isUrl) {
                                            return (
                                                <Link
                                                    key={wordIndex}
                                                    href={word}
                                                    sx={{ color: '#0070D8', textDecoration: 'underline' }}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {word}
                                                </Link>
                                            );
                                        } else if (isEmail) {
                                            return (
                                                <Link
                                                    key={wordIndex}
                                                    href={`mailto:${word}`}
                                                    sx={{ color: '#0070D8', textDecoration: 'underline' }}
                                                >
                                                    {word}
                                                </Link>
                                            );
                                        } else {
                                            return <React.Fragment key={wordIndex}>{word}{' '}</React.Fragment>;
                                        }
                                    })}
                                    <br />
                                </React.Fragment>
                            ))}
                        </Typography>
                    )}

                    {description2 && (
                        <Typography fontSize={{ lg: '21px' }} fontFamily={"SKSans, sans-serif"} sx={{ color: '#0c3034', marginBottom: "20px", fontWeight: 300 }}>
                            {description2}
                        </Typography>
                    )}

                    {description3 && (
                        <Typography fontSize={{ lg: '21px' }} fontFamily={"SKSans, sans-serif"} sx={{ color: '#0c3034', marginBottom: "20px", fontWeight: 300 }}>
                            {description3}
                        </Typography>
                    )}

                    {bulletPoints && bulletPoints.length > 0 && (
                        <Box sx={{ mt: 1 }}>
                            <List>
                                {bulletPoints.map((point, index) => (
                                    <ListItem key={index} sx={{ px: 0, color: "#0c3034", fontSize: '16px', fontWeight: 300, fontFamily: "SKSans, sans-serif" }}>
                                        • {point}
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    )}
                    {bulletPointLinks && bulletPointLinks.length > 0 && (
                        <Box sx={{ mt: 1 }}>
                            <List>
                                {bulletPointLinks.map((link, index) => (
                                    <ListItem key={index} sx={{ px: 0, display: 'flex', alignItems: 'center' }}>
                                        <Typography
                                            sx={{
                                                color: 'blue',
                                                display: 'inline',
                                                fontFamily: 'SKSans, sans-serif',
                                                '&:before': {
                                                    content: '"• "',
                                                    marginRight: 1,
                                                    color: '#0070D8',
                                                    textDecoration: 'none'
                                                },
                                            }}
                                        >
                                            <Link
                                                href={link?.url}
                                                sx={{ color: '#0070D8', textDecoration: 'underline' }}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {link?.text}
                                            </Link>
                                        </Typography>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    )}
                    {endDescription && (
                        <Typography fontSize={{ lg: '21px' }} fontFamily={"SKSans, sans-serif"} fontWeight={300} sx={{ color: '#0c3034' }}>
                            {endDescription}
                        </Typography>
                    )}
                    {contactInfo && (
                        <Box sx={{ mt: 2 }}>
                            <Typography sx={{ color: '#0c3034', fontSize: { lg: '17px' }, fontWeight: 300 }}>
                                {contactInfo.split('support@skyworthusa.com')[0]}
                                <Link
                                    href="mailto:support@skyworthusa.com"
                                    sx={{ color: '#0070D8', textDecoration: 'underline' }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    support@skyworthusa.com
                                </Link>
                                {contactInfo.split('support@skyworthusa.com')[1]}
                            </Typography>
                        </Box>
                    )}
                    {mexcio && <Typography sx={{ color: '#0c3034', fontSize: { lg: '17px' }, fontWeight: 300 }}>
                        For Mexico, please call
                        <Link
                            href={`tel:${55 - 5037 - 1598}`} // Make the phone number clickable
                            sx={{ color: '#0070D8', textDecoration: 'underline', ml: 0.5 }}
                        >
                            55-5037-1598
                        </Link>
                        {" "} for instructions on getting the defective unit repaired or replaced or visit our website at:
                        <Link
                            href="https://www.skyworthusa.com"
                            sx={{ color: '#0070D8', textDecoration: 'underline', ml: 0.5 }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            www.skyworthusa.com
                        </Link>
                        {" "}or send us an email to:{" "}
                        <Link
                            href={`mailto:"www.skyworthusa.com"}`} // Make the email clickable
                            sx={{ color: '#0070D8', textDecoration: 'underline', ml: 0.5 }}
                        >
                            servicioskyworth@dish.com.mx
                        </Link>
                    </Typography>}
                    {USA && <Typography sx={{ color: '#0c3034', fontSize: { lg: '17px' }, fontWeight: 300, }}>
                        For U.S.A & Canada, please call
                        <Link
                            href={`tel:${1 - 888 - 606 - 3212}`} // Make the phone number clickable
                            sx={{ color: '#0070D8', textDecoration: 'underline', ml: 0.5 }}
                        >
                            1-888-606-3212
                        </Link>
                        {" "}  for instructions on getting the defective unit repaired or replaced or visit our website at:
                        <Link
                            href="https://www.skyworthusa.com"
                            sx={{ color: '#0070D8', textDecoration: 'underline', ml: 0.5 }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            www.skyworthusa.com
                        </Link>
                        {" "}or send us an email to:{" "}
                        <Link
                            href={`mailto:"www.skyworthusa.com"}`} // Make the email clickable
                            sx={{ color: '#0070D8', textDecoration: 'underline', ml: 0.5 }}
                        >
                            servicioskyworth@dish.com.mx
                        </Link>
                    </Typography>}
                    {textwithLink && <Typography fontSize={{ lg: '17px' }} fontFamily={"SKSans, sans-serif"} sx={{ color: '#0c3034', marginBottom: "20px", fontWeight: 300 }}>
                        {textwithLink}
                        <Link
                            href={link}
                            sx={{ color: '#0070D8', textDecoration: 'underline' }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            here
                        </Link>.
                    </Typography>}
                </Box>
            </Container>
        </Box>
    );
}

export default PrivacyPolicyText;