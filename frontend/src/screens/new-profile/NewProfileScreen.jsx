import { useState } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { createProfile } from "../../service/profile-service";
import CountrySelect from "../../components/CountrySelect";

export const NewProfileScreen = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleCountryChange = (country) => {
    setFormData({ ...formData, country: country.label });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profile = {
      name: formData.name,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      city: formData.city,
      country: formData.country,
    };
    await createProfile(profile);
    navigate("/", { replace: true });
  };

  return (
    <Paper component="form" onSubmit={handleSubmit}>
      <TextField
        margin="dense"
        label="Name"
        name="name"
        type="text"
        fullWidth
        required
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        label="LastName"
        name="lastName"
        type="text"
        fullWidth
        required
        variant="outlined"
        value={formData.lastName}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        label="Email"
        name="email"
        type="email"
        fullWidth
        required
        variant="outlined"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        label="Phone Number"
        name="phoneNumber"
        type="number"
        fullWidth
        required
        variant="outlined"
        value={formData.phoneNumber}
        onChange={handleChange}
      />

      <TextField
        margin="dense"
        label="City"
        name="city"
        type="text"
        fullWidth
        required
        variant="outlined"
        value={formData.city}
        onChange={handleChange}
      />

      <CountrySelect
        label="Country"
        name="country"
        variant="outlined"
        value={formData.country}
        onChange={handleCountryChange}
      />

      <Stack spacing={2} direction="row">
        <Button type="submit" fullWidth variant="contained">
          Save
        </Button>
      </Stack>
    </Paper>
  );
};
