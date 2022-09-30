import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import TextField from "@mui/material/TextField";
import "./Contacts.css";
import { useState } from "react";

const Contacts = ({ contactList }) => {
  const [searchName, setSearchName] = useState("");

  const serachNameHandler = (e) => {
    setSearchName(e.target.value);
    console.log(searchName);
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }} className="container">
      <Grid container spacing={2} className="grid" direction={"column"}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Contact List
        </Typography>
        <TextField
          id="demo-helper-text-misaligned-no-helper"
          label="Name"
          className="serachField"
          onChange={serachNameHandler}
        />
        <List className="contactList">
          {contactList ? (
            contactList.map((contact) => {
              if (
                contact.firstName.toLowerCase().includes(searchName) ||
                contact.lastName.toLowerCase().includes(searchName)
              ) {
                return (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar alt={contact.firstName} src={contact.picture} />
                    </ListItemAvatar>

                    <ListItemText
                      primary={`${contact.firstName} ${contact.lastName}`}
                      secondary={contact.phoneNumber}
                    />
                  </ListItem>
                );
              }
            })
          ) : (
            <p>Err</p>
          )}
        </List>
      </Grid>
    </Box>
  );
};

export default Contacts;
