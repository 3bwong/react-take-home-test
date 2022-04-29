import React from "react";
import { Box, Typography } from "@mui/material";

import colors from "../../theme/colors";
import JobItem from "./JobItem";

export default class JobBlock extends React.Component {
    render() {
        const { jobs } = this.props;
        const teamTitleStyle = {
            color: colors.primary,
            textTransform: "uppercase",
            marginTop: "80px",
            marginBottom: "10px",
            fontWeight: "bold",
            letterSpacing: "2px",
            fontSize: "15px"
        };


        return (
            <Box>
                <Typography varient="body1" sx={teamTitleStyle}>{jobs.team}</Typography>
                {
                    jobs.jobList.map(job => (
                        <JobItem key={job.id} job={job} />
                    ))
                }
            </Box >
        )
    }
}