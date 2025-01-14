import React, { useState } from "react";
import {
  Box,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "../styles/Drawer.css";

function ScoreBar() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        my: 1,
        px: 2,
        backgroundColor: theme.palette.primary.light,
        border: `2px solid ${theme.palette.primary.dark}`,
        borderRadius: "40px",
        maxWith: "90%",
      }}
    >
      <Typography variant="body2">Charley</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" sx={{ px: 2 }}>
          15
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            py: 0.8,
            borderLeft: `2px solid ${theme.palette.primary.dark}`,
          }}
        >
          <Typography variant="body1" sx={{ px: 1, pl: 2 }}>
            4
          </Typography>
          <Typography variant="body1" sx={{ px: 1 }}>
            3
          </Typography>
          <Typography variant="body1" sx={{ px: 1 }}>
            9
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ScoreBar;
