import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <GroupIcon fontSize="medium" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Profile App
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Profile List
        </Button>
        <Button color="inherit" component={Link} to="/new">
          New
        </Button>
      </Toolbar>
    </AppBar>
  );
};
