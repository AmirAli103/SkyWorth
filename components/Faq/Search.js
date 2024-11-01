import React, { useState } from "react";
import { Box, TextField, IconButton, Paper, Tooltip, Typography, Modal, Button, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { useRouter } from "next/router";
import CloseIcon from '@mui/icons-material/Close';
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: { xs: "row", sm: "row" },
    margin: "0px 10px",
    mt: 7,
    mb: 7,
    position: "relative",
  },
  searchBar: (isFocused) => ({
    width: { xs: "80%", sm: isFocused ? "50%" : "35%" },
    transition: "width 0.3s ease",
    padding: "0",
    border: "none",
    outline: "none",
    height: "40px",
  }),
  iconButton: {
    width: { xs: "80%", sm: "40px" },
    height: "40px",
    color: "black",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: { xs: "0", sm: "0.5%" },
  },
  paper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
    padding: "0",
    marginLeft: { xs: "0", sm: "0.5%" },
  },
  tooltipPaper: {
    backgroundColor: "white",
    padding: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    width: "20vh",
    textAlign: "center",
    height: "auto",
  },
  tooltipText: {
    fontSize: "1rem",
    color: "black",
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPaper: {
    width: { xs: "80%", sm: "30%" },
    padding: 4,
    borderRadius: 4,
  },
  textField: {
    marginBottom: 2,
  },
  formControl: {
    marginBottom: 2,
    width: '100%',
  },
};

function Search() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState('');
  const [searchText, setSearchText] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    email: '',
    details: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const router = useRouter()

  const handleSearchClick = () => {
    setSearchClicked(true);
    if (searchText) {
      router.push(`/kbSection?title=${encodeURIComponent(searchText)}`);
    }
  };

  const handleTooltipClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && searchText) {
      router?.push(`/kbSection?title=${encodeURIComponent(searchText)}`);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.title) errors.title = "Title is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Valid email is required";
    }
    if (!category) errors.category = "Category is required";
    if (!formData.details) errors.details = "Details are required";
    return errors;
  };

  const handleSubmit = async () => {
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch("/api/faq-question", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: formData.title,
            email: formData.email,
            category,
            details: formData.details,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          alert(result.message);
          setFormData({ title: '', email: '', details: '' });
          setCategory('');
          setOpenModal(false);
        } else {
          const error = await response.json();
          alert(error.error || "Something went wrong!");
        }
      } catch (error) {
        alert("Error submitting form");
      }
    }
  };

  return (
    <Box sx={styles.container}>
      <Paper elevation={3} sx={styles.searchBar(isFocused)}>
        <TextField
          fullWidth
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyPress={handleKeyPress}
          InputProps={{
            sx: {
              border: "none",
              outline: "none",
              height: "40px",
              padding: "0",
            },
          }}
        />
      </Paper>
      <Paper elevation={3} sx={styles.paper}>
        <IconButton
          sx={{ ...styles.iconButton, color: searchClicked ? "blue" : "black" }}
          onClick={handleSearchClick}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <Tooltip
        title={
          <Paper sx={styles.tooltipPaper}>
            <Typography sx={styles.tooltipText}>
              Not find the answer you are looking for? Ask us or suggest a better answer for any question.
            </Typography>
          </Paper>
        }
        arrow
        placement="bottom"
        onClick={handleTooltipClick}
      >
        <Paper elevation={3} sx={styles.paper}>
          <IconButton sx={styles.iconButton}>
            <QuestionMarkIcon />
          </IconButton>
        </Paper>
      </Tooltip>
      <Modal open={openModal} onClose={handleCloseModal} sx={styles.modal}>
        <Paper sx={styles.modalPaper}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h5" align="center" sx={{ flexGrow: 1 }}>Customer Support</Typography>
            <CloseIcon onClick={handleCloseModal} sx={{ cursor: 'pointer' }} />
          </Box>
          <TextField
            fullWidth
            variant="outlined"
            label="Question/Title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            error={!!formErrors.title}
            helperText={formErrors.title}
            sx={styles.textField}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
            sx={styles.textField}
          />
          <FormControl variant="outlined" sx={styles.formControl} error={!!formErrors.category}>
            <InputLabel>Select a Category</InputLabel>
            <Select
              value={category}
              onChange={handleCategoryChange}
              label="Select a Category"
              placeholder="Select a Category"
            >
              <MenuItem value="QLED MINI">QLED MINI</MenuItem>
              <MenuItem value="QLED">QLED</MenuItem>
              <MenuItem value="UHD">UHD</MenuItem>
              <MenuItem value="FHD/HD">FHD/HD</MenuItem>
            </Select>
            {formErrors.category && (
              <Typography color="error">{formErrors.category}</Typography>
            )}
          </FormControl>
          <TextField
            fullWidth
            variant="outlined"
            label="Answer/Details"
            name="details"
            value={formData.details}
            onChange={handleInputChange}
            error={!!formErrors.details}
            helperText={formErrors.details}
            multiline
            rows={4}
            sx={styles.textField}
          />
          <Box display="flex" justifyContent="flex-start">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
}

export default Search;
