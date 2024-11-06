import React, { useState } from "react";
import { Box, Typography, Collapse, List } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

function Question({ text, description,bullets }) {
  const [expandedItems, setExpandedItems] = useState({});
  const toggleExpand = (itemId) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  return (
    <Box
      onClick={() => toggleExpand(description)}
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "950px",
        margin: "0 auto",
        padding: 2,
        cursor: "pointer",
        borderBottom: "1px solid #ccc",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <DescriptionIcon sx={{ marginRight: 1, fontSize: 18, color: "#107eec" }} />
        <Typography variant="body1" sx={{ fontSize: 15, color: "#107eec" }}>
          {text}
        </Typography>
        <Typography sx={{ marginLeft: "auto", fontSize: 24, color: "#107eec" }}>
          {expandedItems[description] ? "-" : "+"}
        </Typography>
      </Box>

      <Collapse in={expandedItems[description]} timeout="auto" unmountOnExit>
        {description?.map((feature, index) => (
          <Typography key={index} variant="body2" sx={{ marginTop: "10px" }}>
            <strong>{feature.title}</strong> {feature.description}
          </Typography>
        ))}
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
        {bullets?.map((item, index) => (
          <Typography
            key={index}
            component="li"
            variant="body2"
            sx={{ display: 'list-item', marginBottom: 0.5 }}
          >
            {item}
          </Typography>
        ))}
      </List>
      </Collapse>
    </Box>
  );
}

export default Question;


