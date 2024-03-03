import * as React from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import LaunchIcon from "@mui/icons-material/Launch";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BusinessIcon from "@mui/icons-material/Business";
import ChecklistIcon from "@mui/icons-material/Checklist";

const PrimaryButton = styled(Button)({
  textTransform: "none",
  fontSize: 14,
  borderRadius: "1.5rem",
  margin: "5px",
});

export default function JobDesc() {
  return (
    <div className="JobDesc mx-5 my-5">
      <div className="JobHeading text-2xl font-semibold">
        <p>Senior React JS Developer</p>
      </div>
      <div className="HeadingDetails">
        <List sx={{ padding: "0" }}>
          <ListItem disablePadding>
            <ListItemText
              primary="Uplers &middot; Vellore, Tamil Nadu, India &middot;"
              secondary="2 weeks ago &middot; 54 applicants"
            />
          </ListItem>
        </List>
      </div>
      <div className="JobDetails my-2">
        <List sx={{ minWidth: "150px" }}>
          <ListItem disablePadding>
            <ListItemIcon sx={{ minWidth: "30px"}}>
              <BusinessCenterIcon />
            </ListItemIcon>
            <ListItemText sx={{ marginBottom: "10px"}} secondary="Rs.1,200,000/yr - Rs.1,980,000/yr &middot; Full-time &middot; Mid-Senior Level" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon sx={{ minWidth: "30px" }}>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText sx={{ marginBottom: "10px"}} secondary="1,001-5,000 employees &middot; Technology, Information and Internet" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon sx={{ minWidth: "30px" }}>
              <ChecklistIcon />
            </ListItemIcon>
            <ListItemText  sx={{ marginBottom: "10px"}} secondary="Skills: Back-End Web Development, React.js +8 more" />
          </ListItem>
        </List>
      </div>
      <div className="buttons">
        <PrimaryButton
          variant="contained"
          endIcon={<LaunchIcon />}
          disableElevation
        >
          Apply
        </PrimaryButton>
        <PrimaryButton variant="outlined">Save</PrimaryButton>
      </div>
      <div className="JobDetails text-xl font-semibold my-3">
        <p>About the job</p>
      </div>
    </div>
  );
}
