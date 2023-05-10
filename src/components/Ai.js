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

const Ai = () => {
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
            image="https://www.xivtech.io./download.png"
            style={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontFamily: "Roboto Slab" }}
            >
              AI + RPA = Enabling End-to-End Automation
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Roboto Slab" }}>
              (Drive Efficiency, Automate and Monetize)
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                textAlign: "center",
                fontSize: "1.3rem",
                fontFamily: "Roboto Slab",
              }}
            >
              Process<span style={{ color: "red" }}> | </span>Automation
              <span style={{ color: "red" }}> | </span>Monetization
            </Typography>
            <Typography
              sx={{
                marginTop: "30px",
                fontSize: "1.2rem",
                fontFamily: "Roboto Slab",
              }}
            >
              Our team of professionals help you deliver measurable business
              outcomes by strategizing, designing and executing results driven
              AI + RPA automation. With Ekisu - our flagship AI automation
              product, we help you with end-to end automation for your
              workflows. Each automation helps you save time, reduce cost of
              human capital, and improve efficiency! Now that’s successful
              Digital Transformation!
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Ai;
