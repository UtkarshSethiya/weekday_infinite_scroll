import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import hour from "./images/hourglass.png";
import { styled } from "@mui/material/styles";
import "./jobcard.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import light from "./images/lightning.png";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function Cardcontent({ data }) {
  console.log(data);
  return(
    data && data.map((job) => {
      return (
        <Grid key={job.jdUid} item xs={12} sm={6} md={4}>
        <Card sx={{borderRadius:"20px"}} variant="outlined">
        <React.Fragment >
          <CardContent
            sx={{
              textAlign: "left",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            <span className="card">
              <img height="14px" src={hour} /> <span>Posted 10 days ago</span>
            </span>
            <Typography sx={{ mt: 2 }} variant="h7" component="div">
              {job.jobRole.toUpperCase()}
            </Typography>
            <Typography
              sx={{
                mb: 1.5,
                fontSize: "11px",
                color: "black",
                fontWeight: "600",
              }}
              color="text.secondary"
            >
             {job.location.toUpperCase()}
            </Typography>
            <Typography
              sx={{ mt: 2, fontWeight: "500", fontSize: "15px", color: "grey" }}
              variant="h7"
              component="div"
            >
              Estimated Salary- {job.maxJdSalary
} Lpa
            </Typography>
            <Typography
              sx={{ mt: 2, fontWeight: "500" }}
              variant="h7"
              component="div"
            >
              About Company:
            </Typography>
            <Typography
              sx={{ mt: 1, fontWeight: "600", fontSize: "14px" }}
              variant="h7"
              component="div"
            >
              About us:
            </Typography>
            <Typography variant="body2">
              {job.jobDetailsFromCompany
}
              <br />
             
            </Typography>
            <Typography
              sx={{ mt: 2, fontWeight: "500", fontSize: "15px", color: "grey" }}
              variant="h7"
              component="div"
            >
              Minimum Experience
            </Typography>
            <Typography sx={{ color: "black" }}> {job.minExp?job.minExp+" Years":"NA"}   </Typography>
            <Typography>
              <Button
                sx={{
                  backgroundColor: "#54efc3",
                  color: "black",
                  display: "block",
                  width: "100%",
                  fontWeight: "500",
                }}
                variant="contained"
              >
                <img height="18px" src={light} /> Easy Apply
              </Button>
            </Typography>
          </CardContent>
        </React.Fragment>
        </Card>
        </Grid>
      );
    }));
  
}

export default function JobCard({ data }) {
  console.log(data);
  return (
    <Box sx={{ flexGrow: 1 ,m:3}}>
      <Grid container spacing={3} >
       
          
            <Cardcontent data={data} />
  
      </Grid>
    </Box>
  );
}
