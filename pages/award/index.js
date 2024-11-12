import React from 'react';
import AwardSection from './../../components/Award/cardComponent';
import Image1 from './../../assets/awardImage1.jpg';
import Image2 from './../../assets/awardImage2.jpg';
import Image5 from './../../assets/Image5.jpg';
import Image6 from './../../assets/awardImage6.jpg';
import Image7 from './../../assets/awardImage6.png';
import Image8 from './../../assets/AwardImage7.png';
import { Box } from '@mui/material';
import BackgrondImages from './../../assets/bottom-1.jpg'
import BackgrondImagesSmall from './../../assets/bottom-1-small.jpg'
import LeftAlignedBoxWithBackground from '../../components/Home/LeftAlignedBoxWithBackground';
const App = () => {
  return (
    <Box>
      <LeftAlignedBoxWithBackground backgroundImage={BackgrondImages} backgroundImageSmall={BackgrondImagesSmall} title={"SKYWORTH has grown to be one of the Top Global TV brands in the world."} description={"SKYWORTH won two awards from 2023-2024 Global CE Brands & Global TV Brands during CES. SKYWORTH consistently adheres to its original intention, committed to enabling consumers to deeply experience the charm of technology in their lives."} />
      <AwardSection
        bgColor="#FFFFFF"
        flexDirection="row-reverse"
        awardImage={Image1?.src}
        awardYear="2020 - 2023"
        awardTitle="LEADING BRAND IN TOP QUALITY MANAGEMENT AWARD"
        awardDescription="The Leading Brand in Top Quality Management Award is a prestigious award that recognizes the achievements of companies in quality management. It is a testament to the company's commitment to excellence in quality management."
        buttonText="View All Products"
      />
      <AwardSection
        bgColor="black"
        flexDirection="row"
        awardImage={Image2?.src}
        awardYear="2022 – 2025"
        awardTitle="AAAA GRADE GOOD STANDARDIZING PRACTICE AWARD"
        awardDescription="The AAAA Grade Good Standardizing Practice Award is a prestigious award that recognizes the achievements of Chinese companies in standardization. It is a testament to the country’s growing capabilities in this field."
        buttonText="View All Products"
      />
      <AwardSection
        bgColor="#FFFFFF"
        flexDirection="row-reverse"
        awardImage={Image7?.src}
        awardYear="2020 – 2023"
        awardTitle="CHINA QUALITY INSPECTIO AWARD"
        awardDescription="The China Quality Inspection Award is a prestigious award that recognizes the achievements of quality inspection organizations. It is a testament to the organization's commitment to excellence in quality inspection."
        buttonText="View All Products"
      />
      <AwardSection
        bgColor="black"
        flexDirection="row"
        awardImage={Image8?.src}
        awardYear="2020 – 2023"
        awardTitle="CONSUMER GOOD QUALITY REPUTATION AWARD"
        awardDescription="The Consumer Good Quality Reputation Award is a prestigious award that recognizes the achievements of consumer goods companies. It is a testament to the company’s commitment to excellence in product quality and reputation."
        buttonText="View All Products"
      />
      <AwardSection
        bgColor="#FFFFFF"
        flexDirection="row-reverse"
        awardImage={Image6?.src}
        awardYear="2019"
        awardTitle="AlOT SMART TECHNOLOGY OF CHINA REFRIGERATOR INDUSTRY AWARD"
        awardDescription="The AloT Smart Technology of China Refrigerator Industry Award is a prestigious award that recognizes the achievements of Chinese companies in the development of AloT smart technology for refrigerators. It is a testament to the country's growing technological capabilities in this field."
        buttonText="View All Products"
      />
      <AwardSection
        bgColor="#f5f5f5"
        flexDirection="row-reverse"
        awardImage={Image1?.src}
        awardYear="2019"
        awardTitle="RED STAR DESIGN AWARD"
        awardDescription="The Consumer Good Quality Reputation Award is a prestigious award that recognizes the achievements of consumer goods companies. It is a testament to the company’s commitment to excellence in product quality and reputation."
        buttonText="View All Products"
      />
      <AwardSection
        bgColor="black"
        flexDirection="row"
        awardImage={Image5?.src}
        awardYear="2016"
        awardTitle="HI-TECH ENTERPRISE AWARD"
        awardDescription="The Hi-Tech Enterprise Award is a prestigious award that recognizes the achievements of Chinese high-tech companies. It is a testament to the country’s growing technological capabilities. The award also helps to promote Chinese high-tech to the world."
        buttonText="View All Products"
      />
    </Box>
  );
};

export default App;
