import React from "react";
import { Box } from "rebass";
import { FaSearch } from "react-icons/fa";

const NavBar = ({ backgroundColor }) => {
  return (
    <Box
      bg={backgroundColor}
      px={3}
      py={2}
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        border: "2px green solid",
      }}
    >
      <FaSearch
        style={{
          width: "50px",
          marginLeft: "50px",
        }}
      />
      <textarea
        id="search"
        style={{
          width: "70%",
          maxWidth: "1500px",
          padding: "5px",
          margin: "10px",
          borderRadius: "50px",
          border: "1px solid #ccc",
          resize: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        placeholder="Search here..."
      />
    </Box>
  );
};

export default NavBar;
