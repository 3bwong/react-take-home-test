import React from "react";
import { Box, Typography } from "@mui/material";

import Jobs from "./Jobs";

function Home() {
  return (
    <Box className="jobs-container" sx={{ maxWidth: "1024px", width: "90%", margin: "0 auto", paddingTop: "80px", paddingBottom: "120px"}}>
      <Typography variant="h3" sx={{ textAlign: "center", mb: 2 }}>
        Open Positions
      </Typography>
      <Typography
        sx={{ textAlign: "center", maxWidth: "768px", margin: "0 auto" }}
      >
        Our data is training and testing autonomous systems at companies around
        the world. We're looking for talented visionaries to help us to expand
        our impact on the way artificial intelligence is developed.
      </Typography>

      <Jobs />
    </Box>
  );
}

export default Home;
