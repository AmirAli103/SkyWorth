import React from "react";
import PrivacyPolicyText from "../../components/PolicyText";
import Breadcrumb from "../../components/BreadCrumb";
import { Box, Container } from "@mui/material";
import ReturnPolicy from './ReturnPolicy.json'
function Index() {
  return (
    <div>
      <Container maxWidth="xl">
        <Breadcrumb paddingTop={{ xs: '25%', sm: '18%', md: '12%', lg: '5%' }} />
      </Container>
      <Box sx={{ marginTop: '3%' }}></Box>

      {ReturnPolicy.map((item, index) => (
        <PrivacyPolicyText
          key={index}
          heading={item.heading}
          description1={item.description1}
          description2={item.description2}
          contactInfo={item.contactInfo}
          strongText={item.strongText}
          phoneNumber={item?.phoneNumber}
        />
      ))}
      <Box sx={{ marginTop: '5%' }}></Box>
    </div>
  );
}

export default Index;