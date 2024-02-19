import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <>
      <Box mt="120px" bgcolor="#fff3f4" pt="50px">
        <Stack gap="40px" alignItems="center" px="24px">
          <img src={Logo} alt="logo" width="200px" height="40px"></img>
          <Typography variant="h6" pb="40px" mt="20px">
            Made with ❤️ by rana mohsen
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
