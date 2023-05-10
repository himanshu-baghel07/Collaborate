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

const MakeBolderChoice = () => {
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
              Cloud Native = Future Proof
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Roboto Slab" }}>
              (Achieve Competitive Advantage with Agility, Reliability,
              Responsiveness and Speed.)
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                textAlign: "center",
                fontSize: "1.3rem",
                fontFamily: "Roboto Slab",
              }}
            >
              Speed<span style={{ color: "red" }}> | </span>Agility
              <span style={{ color: "red" }}> | </span>Cost-Effective
            </Typography>
            <Typography
              sx={{
                marginTop: "30px",
                fontSize: "1.2rem",
                fontFamily: "Roboto Slab",
              }}
            >
              We know cloud. We help unlock real value by helping you transform
              your business by virtue of cloud transformation. Being
              Cloud-Native enables Rapid Responsiveness, Innovative Features,
              and Zero Downtime. We help you accelerate business velocity and
              growth by embracing rapid change, large scale and resilence. Our
              expertise and focus on the Twelve-Factor App and the API First
              principles allow us to build true cloud-native apps.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default MakeBolderChoice;
