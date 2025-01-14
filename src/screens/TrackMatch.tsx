import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Navbar from "../components/Navbar";

function TrackMatch() {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [type, setType] = useState("");
  const [format, setFormat] = useState("");

  const theme = useTheme();

  const PointTracker = <></>;

  const Form = (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" sx={{ mb: 1 }}>
          Match
        </Typography>
        {/* <Typography variant="h4" sx={{ mb: 1 }}>
          Ad out
        </Typography> */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <FormControl fullWidth>
            <TextField label="Match name" variant="outlined" sx={{ my: 1 }} />
          </FormControl>
          <FormControl fullWidth variant="filled">
            <InputLabel sx={{ top: "10%" }}>Type</InputLabel>
            <Select
              sx={{
                my: 1,
                backgroundColor: "#EBEEFF",
              }}
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="Singles">Singles</MenuItem>
              <MenuItem value="Doubles">Doubles</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth variant="filled">
            <InputLabel sx={{ top: "10%" }}>Format</InputLabel>
            <Select
              sx={{
                my: 1,
                backgroundColor: "#EBEEFF",
              }}
              value={format}
              onChange={(e) => setFormat(e.target.value)}
            >
              <MenuItem value="Best of 3 / 10 Pt Tiebreak in 3rd">
                Best of 3 / 10 Pt Tiebreak in 3rd
              </MenuItem>
              <MenuItem value="Best of 3 / No Tiebreak in 3rd">
                Best of 3 / No Tiebreak in 3rd
              </MenuItem>
              <MenuItem value="Best of 3 / Tiebreak Set">Best of 3 / Tiebreak Sets</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box className="page">
      <Box className="content">
        <Navbar pageName="Track Match" />
        <Box className="page-content">{isFormFilled ? PointTracker : Form}</Box>
      </Box>
    </Box>
  );
}

export default TrackMatch;
