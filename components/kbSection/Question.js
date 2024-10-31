import React, { useState } from "react";
import { Box, Typography, Collapse } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

function Question({ text, description, }) {
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
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          {description}
        </Typography>
      </Collapse>
    </Box>
  );
}

export default Question;


