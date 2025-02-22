import React from "react";
import { InputBase, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f1f1f1",
        borderRadius: "20px",
        padding: "4px 10px",
      }}
    >
      <InputBase placeholder="Search..." sx={{ ml: 1, flex: 1 }} />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default Search;
