import React, { useState } from "react";
import {
  Box,
  useTheme,
  List,
  ListItem,
  ListItemText,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import InputAdornment from "@mui/material/InputAdornment";
import ImageIcon from "@mui/icons-material/Image";

const Discussion = ({ setDescription, description }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [username, setUsername] = useState("Elmousine mohammed");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const sendMessage = () => {
    if (userInput.trim() !== "" || selectedFile) {
      let message = (
        <div>
          <Typography variant="body1">
            {username}: {userInput}
          </Typography>
          {selectedFile && (
            <div>
              {selectedFile.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt={selectedFile.name}
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
              ) : (
                <a
                  href={URL.createObjectURL(selectedFile)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedFile.name}
                </a>
              )}
            </div>
          )}
        </div>
      );

      setChatMessages([...chatMessages, message]);
      setSelectedFile(null);
      setUserInput("");
    }
  };

  return (
    <Box m="20px">
      <Header title="Discussion" subtitle="-------------------------------" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Messages
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List>
              {chatMessages.map((message, index) => (
                <ListItem key={index}>
                  <ListItemText primary={message} />
                </ListItem>
              ))}
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Box
        display="flex"
        alignItems="center"
        mt={2}
        sx={{ position: "fixed", bottom: "0", width: "80%", height: "70px" }}
      >
        <TextField
          label="Type your message"
          variant="outlined"
          fullWidth
          value={userInput}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <input type="file" onChange={handleFileChange} />
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          color="primary"
          sx={{ backgroundColor: "greenyellow", width: "10%", height: "40px" }}
          onClick={sendMessage}
        >
          Send
        </Button>
      </Box>

    </Box>
  );
};

export default Discussion;
