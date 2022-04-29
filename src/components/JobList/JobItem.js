import React from "react";
import { Button, Typography } from "@mui/material";

import "../../styles/mobile.css";

export default class JobItem extends React.Component {
    render() {
        const { job } = this.props;

        const jobItemStyle = {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            width: "100%",
            padding: "40px 0px",
            borderBottom: "1px solid rgb(129, 146, 158)",
            textDecoration: "none"
        };

        const jobTitleStyle = {
            marginBottom: "10px",
            fontSize: "24px",
            lineHeight: 1.2,
            fontWeight: 400
        }

        const jobSubTitleStyle = {
            color: "rgb(255, 255, 255)",
            fontWeight: 300,
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "2.5px",
            fontFamily: "ProximaNova, Helvetica, Arial, serif",
            lineHeight: 1.57
        }

        return (
            <a href={job.applyUrl} style={jobItemStyle}>
                <div className="JobItem">
                    <Typography varient="h3" sx={jobTitleStyle}>
                        {job.text}
                    </Typography>
                    <Typography varient="subtitle2" sx={jobSubTitleStyle}>
                        {job.categories.location} / {job.categories.team}
                    </Typography>
                </div>
                <Button variant="outlined">Apply</Button>
            </a>
        )
    }
}