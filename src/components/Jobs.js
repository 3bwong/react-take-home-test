import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";

import GetJobList from "../services/LeverApi.service";
import JobFilter from "./JobList/JobFilter";
import JobBlock from "./JobList/JobBlock";

function Jobs() {
    const [filter, setFilter] = useState({
        location: "ALL LOCATIONS",
        team: "ALL TEAMS",
        commitment: "ALL WORK TYPE"
    });
    const [jobs, setJobs] = useState([]);
    const [activeJobs, setActiveJobs] = useState([]);
    const [groupedJobs, setGroupedJobs] = useState([]);
    const [filterOpts, setFilterOpts] = useState({
        locations: ["ALL LOCATIONS"],
        teams: ["ALL TEAMS"],
        commitments: ["ALL WORK TYPES"]
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        async function getLeverJobs() {
            try {
                setIsLoading(true);
                const res = await GetJobList();
                setJobs(res);
                setActiveJobs(res);

                const options = {
                    locations: ["ALL LOCATIONS"],
                    teams: ["ALL TEAMS"],
                    commitments: ["ALL WORK TYPES"]
                }
                res.forEach(job => {
                    if (options.commitments.indexOf(job.categories.commitment) === -1) {
                        options.commitments.push(job.categories.commitment);
                    }
                    if (options.locations.indexOf(job.categories.location) === -1) {
                        options.locations.push(job.categories.location);
                    }
                    if (options.teams.indexOf(job.categories.team) === -1) {
                        options.teams.push(job.categories.team);
                    }
                })
                setFilterOpts(options);
                setFilter({
                    location: options.locations[0],
                    team: options.teams[0],
                    commitment: options.commitments[0]
                })
                grouping(options.teams, res);

                setIsLoading(false);
            }
            catch (err) {
                console.error(err);
                setIsLoading(false);
            }
        }

        getLeverJobs();
    }, [setJobs]);

    const grouping = (options, active) => {
        if (options.length > 2) {
            const teamJobs = options.slice(1).map(team => ({ team: team, jobList: [] }));
            active.forEach(job => {
                const index = teamJobs.findIndex(team => job.categories.team === team.team);
                if (index > -1) {
                    teamJobs[index].jobList.push(job)
                }
            })
            setGroupedJobs(teamJobs);
        }
    }

    const handleChange = (event) => {
        setFilter(event);
        const current = jobs.filter(job => {
            return (job.categories.commitment === filter.commitment || filter.commitment === "ALL WORK TYPES") &&
                (job.categories.team === filter.team || filter.team === "ALL TEAMS") &&
                (job.categories.location === filter.location || filter.location === "ALL LOCATIONS");
        });
        setActiveJobs(current);
        grouping(filterOpts.teams, current);
    }

    return (
        <Box sx={{ marginTop: "80px" }}>
            {isLoading && (
                <Box sx={{ textAlign: "center" }}>
                    <CircularProgress />
                </Box>
            )}
            {!isLoading && (
                <JobFilter options={filterOpts} values={filter} onChange={handleChange} />
            )}
            {!isLoading && (
                groupedJobs.map(teamJobs =>
                    teamJobs.jobList.length > 0 &&
                    <JobBlock key={teamJobs.team} jobs={teamJobs} />
                )
            )}
        </Box>
    );
}

export default Jobs;