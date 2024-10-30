import { Box, Typography } from "@mui/material";
import Link from "next/link";
import questionsData from "../kbSection/QuestionData";
import { useRouter } from "next/router";
const FAQCard = ({ title }) => {
  // Get the number of questions matching the title from questionsData
  const badgeNumber = (questionsData[title]?.length || 0).toString().padStart(2, '0');
  const router = useRouter();
  const handleClick = () => {
    router.push(`/kbSection?title=${encodeURIComponent(title)}`);
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: "4px",
        padding: "20px",
        textAlign: "center",
        width: "52vh",
        height: "9.5rem",
        position: "relative",
        transition: "all 0.3s ease",
        cursor: 'pointer',
        "&:hover": {
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Link href={`/kbSection?title=${encodeURIComponent(title)}`}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 20,
            backgroundColor: "#0263B2",
            color: "white",
            padding: "14px 11px",
            clipPath: "polygon(100% 0%, 100% 100%, 50% 75%, 0 100%, 0 0)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body1" sx={{ fontSize: "16px", }}>
            {badgeNumber}
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ mt: 5, color: "#808080" }}>
          {title}
        </Typography>
      </Link>
    </Box>
  );
};

export default FAQCard;
