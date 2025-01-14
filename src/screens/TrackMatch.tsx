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
  const [type, setType] = useState(1);
  const [format, setFormat] = useState("");

  const theme = useTheme();

  const PointTracker = <></>;

  const OpponentForm = ({ OppNum }: { OppNum: number }) => {
    return (
      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" sx={{ mb: 1 }}>
          {type === 1 ? "Opponent" : `Opponent ${OppNum}`}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <FormControl fullWidth>
            <TextField
              label={`Opponent ${type === 2 ? OppNum : ""} Name`}
              variant="outlined"
              sx={{ my: 1 }}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label={`Opponent ${type === 2 ? OppNum : ""} UTR`}
              variant="outlined"
              sx={{ my: 1 }}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label={`Opponent ${type === 2 ? OppNum : ""} WTN`}
              variant="outlined"
              sx={{ my: 1 }}
            />
          </FormControl>
        </Box>
      </Box>
    );
  };

  const PartnerForm = () => {
    return (
      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" sx={{ mb: 1 }}>
          Partner
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <FormControl fullWidth>
            <TextField label={`Partner Name`} variant="outlined" sx={{ my: 1 }} />
          </FormControl>
          <FormControl fullWidth>
            <TextField label="Partner UTR" variant="outlined" sx={{ my: 1 }} />
          </FormControl>
          <FormControl fullWidth>
            <TextField label="Partner WTN" variant="outlined" sx={{ my: 1 }} />
          </FormControl>
        </Box>
      </Box>
    );
  };

  const Form = () => {
    return (
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
              <InputLabel sx={{ top: "10%", color: theme.palette.text.primary }}>Type</InputLabel>
              <Select
                sx={{
                  my: 1,
                  backgroundColor: "#EBEEFF",
                }}
                value={type}
                onChange={(e) => setType(Number(e.target.value))}
              >
                <MenuItem value={1}>Singles</MenuItem>
                <MenuItem value={2}>Doubles</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth variant="filled">
              <InputLabel sx={{ top: "10%", color: theme.palette.text.primary }}>Format</InputLabel>
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
        {type === 2 && <PartnerForm />}
        <OpponentForm OppNum={1} />
        {type === 2 && <OpponentForm OppNum={2} />}
      </Box>
    );
  };

  return (
    <Box className="page">
      <Box className="content">
        <Navbar pageName="Track Match" />
        <Box className="page-content">{isFormFilled ? PointTracker : <Form />}</Box>
      </Box>
    </Box>
  );
}

export default TrackMatch;
