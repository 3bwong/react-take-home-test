import React from "react";
import { Box, Typography } from "@mui/material";
import bannerImg from "../images/banner.jpeg";

const BoxStyle = {
    width: "100%",
    height: "188px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url("${bannerImg}")`,
    backgroundRepeat: "no-repeat",
    backgroundOrigin: "content-box",
    backgroundSize: "cover",
    backgroundPosition: "center"
};

const TextStyle = {
    fontSize: "2.5rem",
    letterSpacing: "-2.75px"
};

function Banner() {
    return (
        <Box sx={ BoxStyle }>
            <Typography variant="h2" sx={ TextStyle }>
                Join Us
            </Typography>
        </Box>
    );
}

export default Banner;