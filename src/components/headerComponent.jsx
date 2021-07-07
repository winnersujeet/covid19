import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";
import BubbleChartOutlinedIcon from "@material-ui/icons/BubbleChartOutlined";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
  return (
    <AppBar position='static' style={{ background: indigo["A400"] }}>
      <Toolbar>
        <IconButton edge='start' color='inherit' aria-label='menu'>
          <BubbleChartOutlinedIcon />
        </IconButton>
        <Typography variant='h6'>
          <Link to='/' style={{ textDecoration: "none", color: "white" }}>
            Covid19 Tracker
          </Link>
        </Typography>

        <Button
          component={Link}
          to='/feedback_and_grievance'
          variant='outlined'
          color='default'
          startIcon={<RssFeedIcon />}
          style={{
            color: "white",
            borderColor: "white",
            textDecoration: "none",
            marginLeft: "auto",
          }}>
          Feedback And Grievance
        </Button>
      </Toolbar>
    </AppBar>
  );
}
