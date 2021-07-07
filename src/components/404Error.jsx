import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Button } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

export default function NotFoundError() {
  return (
    <Box mt={6}>
      <Typography variant='h2' color='primary' align='center'>
        404 Error
      </Typography>

      <Typography variant='h6' color='textSecondary' align='center'>
        Page Not Found
      </Typography>

      <p align='center'>
        <Button
          variant='outlined'
          color='primary'
          style={{ margin: "100px auto 50px auto" }}
          startIcon={<KeyboardBackspaceIcon />}
          component={Link}
          to='/'>
          Go Back
        </Button>
      </p>
    </Box>
  );
}
