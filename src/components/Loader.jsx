import { Box } from "@mui/material";
import React from "react";
import { Atom } from "react-loading-indicators";

const Loader = () => {
  return (
    <Box sx={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",}}>
      <Atom style={{ fontSize: "50px" }} color="#cc31c8" size="medium" text="" textColor="" />
    </Box>
  );
};

export default Loader;
