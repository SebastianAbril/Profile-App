import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Routes, Route } from "react-router-dom";
import { ProfileListScreen } from "./screens/profile-list/ProfileListScsreen";
import { NewProfileScreen } from "./screens/new-profile/NewProfileScreen";
import { ViewProfileScreen } from "./screens/view-profile/ViewProfileScreen";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// CSSBaseline is a normalize.css

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <main>
          <Container maxWidth="md" sx={{ pt: 2 }}>
            <Routes>
              <Route path="/" element={<ProfileListScreen />} />
              <Route path="/new" element={<NewProfileScreen />} />
              <Route path="/profile/:id" element={<ViewProfileScreen />} />
            </Routes>
          </Container>
        </main>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
