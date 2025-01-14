import React, { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";

function PastScores() {
  return (
    <Box className="page">
      <Box className="content">
        <Navbar pageName="Past Scores" />
      </Box>
    </Box>
  );
}

export default PastScores;
