import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Question from "./Question";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import questionsData from "./QuestionData";
import { useRouter } from "next/router";

function QuestionList() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("default");
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const questionsPerPage = 9;

  const { title } = router.query;
  const searchQuestions = (keyword) => {
    const results = [];

    Object.keys(questionsData).forEach((category) => {
      const matchingQuestions = questionsData[category].filter((question) =>
        question.text.toLowerCase().includes(keyword.toLowerCase())
      );
      results.push(...matchingQuestions);
    });

    return results;
  };

  useEffect(() => {
    if (title && questionsData[title]) {
      setFilteredQuestions(questionsData[title]);
    } else if (title) {
      const searchResults = searchQuestions(title);
      setFilteredQuestions(searchResults);
    } else {
      setFilteredQuestions([]);
    }
  }, [title]);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortedQuestions = [...filteredQuestions].sort((a, b) => {
    if (sortOption === "a-z") {
      return a.text.localeCompare(b.text);
    } else if (sortOption === "popularity") {
      return b.popularity - a.popularity;
    } else if (sortOption === "views") {
      return b.views - a.views;
    } else {
      return 0;
    }
  });

  const currentQuestions = sortedQuestions.slice(
    (currentPage - 1) * questionsPerPage,
    currentPage * questionsPerPage
  );

  return (
    <Box
      sx={{
        alignItems: "center",
        maxWidth: "950px",
        margin: "0 auto",
        padding: 2,
        mt: 6
      }}
    >
      {/* <Box sx={{ display: "flex", justifyContent: "flex-end", marginBottom: 3 }}>
        <select value={sortOption} onChange={handleSortChange} style={{ padding: '8px', fontSize: '14px' }}>
          <option value="default">Default</option>
          <option value="a-z">Sort A-Z</option>
          <option value="popularity">Sort by Popularity</option>
          <option value="views">Sort by Views</option>
        </select>
      </Box> */}
      {currentQuestions.length > 0 ? (
        currentQuestions.map((question, index) => (
          <Question key={index} text={question.text} description={question.des} bullets={question.bullets} title={title} />
        ))
      ) : (
        <p>No questions found for this search.</p>
      )}
      {filteredQuestions?.length > questionsPerPage && (
        <>
          <Stack spacing={2} sx={{ marginTop: 6, mb: 3 }}>
            <Pagination
              count={Math.ceil(filteredQuestions.length / questionsPerPage)}
              page={currentPage}
              onChange={handleChange}
              shape="rounded"
              variant="outlined"
            />
          </Stack>
          <Box sx={{ mb: 7 }} />
        </>
      )}
    </Box>
  );
}

export default QuestionList;
