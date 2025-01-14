import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "../styles/LiveScore.css";
import Navbar from "../components/Navbar";
import ScoreBar from "../components/ScoreBar";

function LiveScore() {
  const theme = useTheme();
  return (
    <Box className="page">
      <Box className="content">
        <Navbar pageName="Live Score" />
        <Box className="page-content">
          <Box sx={{ mb: 4 }}>
            <Typography variant="h2">Match Score</Typography>
            <Typography variant="h4" sx={{ mb: 1 }}>
              Ad out
            </Typography>
            <Box className="scoreboard">
              <ScoreBar />
              <ScoreBar />
            </Box>
          </Box>
          <Box>
            <Typography variant="h2" sx={{ mb: 1 }}>
              Opponent
            </Typography>
            <Box
              className="opponent-card"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                py: 1,
                px: 2,
                border: `2px solid ${theme.palette.primary.dark}`,
                borderRadius: "10px",
                backgroundColor: theme.palette.primary.light,
              }}
            >
              <Typography variant="body1">Charley D.</Typography>
              <Box>
                <Typography variant="body1">UTR - 3.2</Typography>
                <Typography variant="body1">WTA - 403</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LiveScore;
