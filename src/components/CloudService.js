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

const CloudService = () => {
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
            image="https://www.xivtech.io./m1.webp"
            style={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontFamily: "Roboto Slab" }}
            >
              Cloud Transition = Business Outcomes
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Roboto Slab" }}>
              (Rapidly - Rehost, Refactor, Rearchitect, Rebuild and Replace
              applications to transform and achieve business goals.)
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                textAlign: "center",
                fontSize: "1.3rem",
                fontFamily: "Roboto Slab",
              }}
            >
              On-Demand<span style={{ color: "red" }}> | </span>Transformation
              <span style={{ color: "red" }}> | </span>Utilization
            </Typography>
            <Typography
              sx={{
                marginTop: "30px",
                fontSize: "1.2rem",
                fontFamily: "Roboto Slab",
              }}
            >
              Achieve business outcomes by transforming to cloud. Our unique
              capabilities allow us to help you, Discover New Revenue Streams,
              Reduce Cycle Time, Bring Scale and Reliability, Decrease Time to
              Market, Future Proof your Digital Estate. Why stop here? Go beyond
              with adopting cloud to integrate new forms of technologies to
              speed up, automate and improve your business. Cloud Computing
              integrates technologies such as Artificial Intelligence (AI),
              Machine Learning, Big Data Analytics, and the Internet of Things
              (IoT), helping you to achieve your business goals.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default CloudService;
