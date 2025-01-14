import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./Theme";
import TrackScore from "./screens/TrackMatch";
import LiveScore from "./screens/LiveScore";
import PastScores from "./screens/PastScores";
import "./App.css";
import "./styles/Theme.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LiveScore />} />
          <Route path="/Track" element={<TrackScore />} />
          <Route path="/PastScores" element={<PastScores />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
