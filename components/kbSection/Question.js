import React from "react";
import { Box, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import Link from "next/link";

function Question({ text, description, title }) {
  return (
    <Link
      href={{
        pathname: "/Knowledge-base",
        query: { text, description, title }, // Pass text and description via query parameters
      }}
      passHref
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          maxWidth: "950px",
          margin: "0 auto",
          padding: 2,
          cursor: "pointer", // Indicate that the question is clickable
          "&:hover": {
            backgroundColor: "#f5f5f5", // Change background on hover
          },
        }}
      >
        <DescriptionIcon
          sx={{ marginRight: 1, fontSize: 18, color: "#107eec" }}
        />
        <Typography variant="body1" sx={{ fontSize: 15, color: "#107eec" }}>
          {text}{" "}
          {/* <span style={{ color: "black" }}> (1 minute read)</span> */}
        </Typography>
      </Box>
    </Link>
  );
}

export default Question;
