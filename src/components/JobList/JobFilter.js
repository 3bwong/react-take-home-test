import { Grid, Typography, FormControl, Select, MenuItem } from "@mui/material";
import React from "react";

import "../../styles/mobile.css";

export default class JobFilter extends React.Component {
    render() {
        const { options, values, onChange } = this.props;

        const locationChange = (event) => {
            const newValue = Object.assign(values, {location: event.target.value});
            console.log(newValue)
            onChange(newValue);
        }

        const teamChange = (event) => {
            const newValue = Object.assign(values, {team: event.target.value});
            console.log(newValue)
            onChange(newValue);
        }

        const commitmentChange = (event) => {
            const newValue = Object.assign(values, {commitment: event.target.value});
            console.log(newValue)
            onChange(newValue);
        }

        return (
            <Grid container spacing={2} sx={{ alignItems: "center" }}>
                <Grid item xs={12} md={1.5}>
                    <Typography varient="body1">FILTER BY:</Typography>
                </Grid>
                <Grid item xs={12} md={2.5}>
                    <FormControl fullWidth>
                        <Select
                            value={values.location}
                            onChange={locationChange}
                        >
                            {
                                options.locations.map((location, index) =>
                                    <MenuItem key={index} value={location}>{location}</MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={2.5}>
                    <FormControl fullWidth>
                        <Select
                            value={values.team}
                            onChange={teamChange}
                        >
                            {
                                options.teams.map((team, index) =>
                                    <MenuItem key={index} value={team}>{team}</MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={2.5}>
                    <FormControl fullWidth>
                        <Select
                            value={values.commitment}
                            onChange={commitmentChange}
                        >
                            {
                                options.commitments.map((commitment, index) =>
                                    <MenuItem key={index} value={commitment}>{commitment}</MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>
                </Grid>
            </Grid >
        )
    }
}