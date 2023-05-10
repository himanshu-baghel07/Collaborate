import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: "10vh",
        backgroundColor: "#1d385e",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Playfair Display",
      }}
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');
      </style>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h1>Let's Collaborate</h1>
      </Link>
    </Container>
  );
};
export default Header;
