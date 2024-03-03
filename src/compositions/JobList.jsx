import * as React from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, ListItemAvatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import Pagination from "@mui/material/Pagination";

export default function JobList() {
  return (
    <div className="JobList">
    <List sx={{minWidth: 150}}>
      <ListItem
        sx={{
          backgroundColor: "#0A66C2",
          borderTopLeftRadius: "10px",
        }}
      >
        <ListItemText
          primary="Jobs based on your profile"
          primaryTypographyProps={{
            color: "whitesmoke",
          }}
          secondary={
            <React.Fragment>
              <Typography variant="body2" color="whitesmoke">
                2 results
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItemButton
        alignItems="flex-start"
        sx={{
          "&:hover": {
            bgcolor: "rgba(30, 144, 255, 0.2)",
          },
        }}
      >
        <ListItemAvatar className="hidden md:inline">
          <Avatar
            alt="Uplers"
            src="/static/images/avatar/1.jpg"
            variant="square"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Senior React JS Developer"
          primaryTypographyProps={{
            color: "#0077B5",
            fontWeight: 500,
            fontSize: 17,
          }}
          secondary={
            <React.Fragment>
              <Typography variant="body2" color="text.primary">
                Uplers
              </Typography>
              {"Vellore, Tamil Nadu, India (Remote)"}
            </React.Fragment>
          }
        />
      </ListItemButton>
      <Divider variant="inset" component="li" />
      <ListItemButton
        alignItems="flex-start"
        sx={{
          "&:hover": {
            bgcolor: "rgba(30, 144, 255, 0.2)",
          },
        }}
      >
        <ListItemAvatar className="hidden md:inline">
          <Avatar
            alt="Uplers"
            src="/static/images/avatar/2.jpg"
            variant="square"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Full Stack Developer"
          primaryTypographyProps={{
            color: "#0077B5",
            fontWeight: 500,
            fontSize: 17,
          }}
          secondary={
            <React.Fragment>
              <Typography variant="body2" color="text.primary">
                Uplers
              </Typography>
              {"India (Remote)"}
            </React.Fragment>
          }
        />
      </ListItemButton>
      <Divider/>
    </List>
    <Pagination count={10} size="small"/>
    </div>
  );
}
