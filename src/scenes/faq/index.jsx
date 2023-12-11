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

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // State to manage chat messages and user input
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [username, setUsername] = useState("Elmousine mohammed"); // Default username

  // Function to add a message to the chat
  const addMessageToChat = (message) => {
    const formattedMessage = `${username}: ${message}`;
    setChatMessages([formattedMessage, ...chatMessages]);
  };

  // Function to handle user input change
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  // Function to handle sending a message
  const sendMessage = () => {
    if (userInput.trim() !== "") {
      addMessageToChat(userInput);
      setUserInput("");
    }
  };

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      {/* Accordion sections */}
      <Accordion
        defaultExpanded
        onChange={() => addMessageToChat("An Important Question")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Chat component displaying messages */}
      <List>
        {chatMessages.map((message, index) => (
          <ListItem key={index}>
            <ListItemText primary={message} />
          </ListItem>
        ))}
      </List>

      {/* Input bar for the user to type messages */}
      <Box display="flex" alignItems="center" mt={2} sx={{position:"fixed",bottom:"0",width:"60%"}}>
        <TextField
          label="Type your message"
          variant="outlined"
          fullWidth
          value={userInput}
          onChange={handleInputChange}
        />
          
        <Button variant="contained" color="primary" sx={{ backgroundColor: "greenyellow" }} onClick={sendMessage}>
          Send
        </Button>
      </Box>
      

      {/* Repeat the above structure for other Accordion sections */}
    </Box>
  );
};

export default FAQ;
