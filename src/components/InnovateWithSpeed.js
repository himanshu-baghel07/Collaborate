import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import "../App.css";

const InnovateWithSpeed = () => {
  return (
    <Container maxWidth={false} id="container">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap');
      </style>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <Card
          id="card"
          sx={{
            maxWidth: 1200,
            backgroundColor: "#06657a",
            color: "white",
            marginBottom: "30px",
            marginTop: "30px",
          }}
        >
          <CardMedia
            component="img"
            height="350"
            alt="AI + RPA"
            image="https://www.xivtech.io./main-service1.jpeg"
            style={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontFamily: "Roboto Slab" }}
            >
              DevOps with Azure
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Roboto Slab" }}>
              (Greater Agility, Resilience and Portability by building and
              deploying apps rapidly.)
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                textAlign: "center",
                fontSize: "1.3rem",
                fontFamily: "Roboto Slab",
              }}
            >
              Collaborate<span style={{ color: "red" }}> | </span>Speed
              <span style={{ color: "red" }}> | </span>Innovate
            </Typography>
            <Typography
              sx={{
                marginTop: "30px",
                fontSize: "1.2rem",
                fontFamily: "Roboto Slab",
              }}
            >
              We help you get to market quicker by integrating DevOps Automation
              leveraging Containers, CICD and Microservices. Achieve business
              outcomes by adopting DevOps. Our unique capabilities allow us to
              help you build continuous delivery pipeline, enhance reliability &
              resilience, balance agility & consistency at scale.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default InnovateWithSpeed;
