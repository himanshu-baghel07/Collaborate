import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigateAi = useNavigate();
  const navigateBolderChoice = useNavigate();
  const navigateInnovateWithSpeed = useNavigate();
  const navigateCloudService = useNavigate();

  const handleAi = () => {
    navigateAi("/ai");
  };

  const handleBolderChoice = () => {
    navigateBolderChoice("/makeBolderChoice");
  };

  const handleInnovateWithSpeed = () => {
    navigateInnovateWithSpeed("/innovateWithSpeed");
  };

  const handleCloudService = () => {
    navigateCloudService("/cloudService");
  };
  return (
    <Container maxWidth={false} id="container">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Dosis&family=Roboto+Slab:wght@500&display=swap');
      </style>
      <Box
        sx={{
          padding: "10px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Card
          sx={{
            width: 500,
            maxHeight: 500,
            backgroundColor: "#06657a",
            color: "white",
            marginBottom: "30px",
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardMedia
            height="300"
            component="img"
            alt="AI + RPA"
            image="https://www.xivtech.io./rp2.jpg"
            style={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              sx={{ fontFamily: "Roboto Slab" }}
            >
              AI + RPA is what we do
            </Typography>
            <Typography
              sx={{ fontFamily: "Dosis", fontSize: "1rem", fontWeight: "600" }}
            >
              Future-Proof your business. Drive efficiency, profitability and
              deliver on customer experience
            </Typography>
            <Button
              fullWidth
              sx={{
                marginTop: "10px",
                backgroundColor: "#0af20e",
                color: "navy",
                "&:hover": { backgroundColor: "#039405" },
              }}
              onClick={handleAi}
            >
              Visit
            </Button>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: 500,
            maxHeight: 500,
            backgroundColor: "#06657a",
            color: "white",
            display: "flex",
            flexDirection: "column",
            marginBottom: "30px",
          }}
        >
          <CardMedia
            height="300"
            component="img"
            alt="Make Bolder Choices"
            image="https://www.xivtech.io./p1.png"
            style={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              sx={{ fontFamily: "Roboto Slab" }}
            >
              Make Bolder Choices
            </Typography>
            <Typography
              sx={{ fontFamily: "Dosis", fontSize: "1rem", fontWeight: "600" }}
            >
              Digital focused strategies to realize market-changing ideas
            </Typography>
            <Button
              fullWidth
              sx={{
                marginTop: "10px",
                backgroundColor: "#0af20e",
                color: "navy",
                "&:hover": { backgroundColor: "#039405" },
              }}
              onClick={handleBolderChoice}
            >
              Visit
            </Button>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: 500,
            maxHeight: 500,
            backgroundColor: "#06657a",
            display: "flex",
            flexDirection: "column",
            marginBottom: "30px",
            color: "white",
          }}
        >
          <CardMedia
            height="300"
            component="img"
            alt="Innovate with Speed"
            image="https://www.xivtech.io./p2.jpg"
            style={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              sx={{ fontFamily: "Roboto Slab" }}
            >
              Innovate with Speed
            </Typography>
            <Typography
              sx={{ fontFamily: "Dosis", fontSize: "1rem", fontWeight: "600" }}
            >
              Create higher quality software, deliver on customer expectations
              and business goals
            </Typography>
            <Button
              fullWidth
              sx={{
                marginTop: "10px",
                backgroundColor: "#0af20e",
                color: "navy",
                "&:hover": { backgroundColor: "#039405" },
              }}
              onClick={handleInnovateWithSpeed}
            >
              Visit
            </Button>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: 500,
            maxHeight: 500,
            color: "white",
            backgroundColor: "#06657a",
            display: "flex",
            flexDirection: "column",
            marginBottom: "30px",
          }}
        >
          <CardMedia
            height="300"
            component="img"
            alt="Embrace Cloud"
            image="https://www.xivtech.io./p3.jpg"
            style={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              sx={{ fontFamily: "Roboto Slab" }}
            >
              Embrace Cloud
            </Typography>
            <Typography
              sx={{ fontFamily: "Dosis", fontSize: "1rem", fontWeight: "600" }}
            >
              With Cloud-First accelerate innovation and optimize performance
            </Typography>
            <Button
              fullWidth
              sx={{
                marginTop: "10px",
                backgroundColor: "#0af20e",
                color: "navy",
                "&:hover": { backgroundColor: "#039405" },
              }}
              onClick={handleCloudService}
            >
              Visit
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
export default Main;
