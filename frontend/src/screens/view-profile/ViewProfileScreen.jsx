import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import { getProfileById } from "../../service/profile-service";
import { NameAvatar } from "../../components/NameAvatar";

export const ViewProfileScreen = () => {
  const [profile, setProfile] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    country: "",
  });
  const params = useParams();
  const loadProfileById = async (id) => {
    const profile = await getProfileById(id);
    setProfile(profile);
  };

  useEffect(() => {
    if (params.id) {
      loadProfileById(params.id);
    }
  }, [params.id]);

  return (
    <Paper>
      <Stack direction="row" spacing={2} alignItems="center">
        <NameAvatar name={`${profile.name} ${profile.lastName}`} />
        <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
          <InputLabel>Name</InputLabel>
          <TextField
            margin="dense"
            name="name"
            type="text"
            fullWidth
            variant="outlined"
            disabled
            value={profile.name}
          />
          <InputLabel>Lastname</InputLabel>
          <TextField
            margin="dense"
            name="lastname"
            type="text"
            fullWidth
            variant="outlined"
            value={profile.lastName}
            disabled
          />
        </Stack>
      </Stack>

      <InputLabel>Email</InputLabel>
      <TextField
        margin="dense"
        name="email"
        type="text"
        fullWidth
        variant="outlined"
        value={profile.email}
        disabled
      />
      <InputLabel>Phone Number</InputLabel>
      <TextField
        margin="dense"
        name="phoneNumber"
        type="number"
        fullWidth
        required
        variant="outlined"
        value={profile.phoneNumber}
        disabled
      />
      <InputLabel>City</InputLabel>
      <TextField
        margin="dense"
        name="city"
        type="text"
        fullWidth
        required
        variant="outlined"
        value={profile.city}
        disabled
      />
      <InputLabel>Country</InputLabel>
      <TextField
        margin="dense"
        name="country"
        type="text"
        fullWidth
        required
        variant="outlined"
        value={profile.country}
        disabled
      />
    </Paper>
  );
};
