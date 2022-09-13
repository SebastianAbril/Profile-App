import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 1,
        px: 2,
        mt: "auto",
        backgroundColor: "primary.main",
        width: "100%",
      }}
    >
      <Container maxWidth="md">
        <Typography align="center" variant="body1" color="white">
          Made by Juan Sebastian Abril
        </Typography>
        <Typography variant="body2" color="white" align="center">
          {"Copyright © "}

          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
};
