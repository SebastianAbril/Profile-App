import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate, useParams } from "react-router-dom";
import { getProfileById, createProfile } from "../../service/profile-service";

const EMPTY_STATE = {
  name: "",
  weight: "",
  type: "ShuttleVehicle",
  speed: "",
  tonsOfPropulsion: "",
  loadCapacity: "",
  crewCapacity: "",
  quantity: "",
};

export const NewProfileScreen = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [formData, setFormData] = useState(EMPTY_STATE);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createProfile(formData.quantity, formData.type, formData);
    navigate("/", { replace: true });
  };

  const loadItemById = async (id) => {
    const item = await getProfileById(id);
    setFormData({
      type: item.spacecraft.getType(),
      quantity: item.quantity,
      ...item.spacecraft.toJSON(),
    });
  };

  useEffect(() => {
    if (params.id) {
      loadItemById(params.id);
    }
  }, [params.id]);

  const isEditable = params.id ? true : false;

  return (
    <Paper component="form" onSubmit={handleSubmit}>
      <FormControl fullWidth>
        <InputLabel id="Type">Type</InputLabel>
        <Select
          labelId="Type"
          label="Type"
          name="type"
          required
          disabled={isEditable}
          value={formData.type}
          onChange={handleChange}
        >
          <MenuItem value={"ShuttleVehicle"}>ShuttleVehicle</MenuItem>
          <MenuItem value={"UncrewedSpacecraft"}>UncrewedSpacecraft</MenuItem>
          <MenuItem value={"CrewedSpacecraft"}>CrewedSpacecraft</MenuItem>
        </Select>
      </FormControl>
      <TextField
        margin="dense"
        label="Lastname"
        name="lastname"
        type="text"
        fullWidth
        required
        variant="outlined"
        disabled={isEditable}
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        label="Weight [Ton]"
        name="weight"
        type="number"
        fullWidth
        required
        variant="outlined"
        disabled={isEditable}
        value={formData.weight}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        label="Quantity"
        name="quantity"
        type="number"
        fullWidth
        required
        variant="outlined"
        value={formData.quantity}
        onChange={handleChange}
      />

      {formData.type === "ShuttleVehicle" && (
        <>
          <TextField
            margin="dense"
            label="Tons Of Propulsion [Ton]"
            name="tonsOfPropulsion"
            type="number"
            fullWidth
            required
            variant="outlined"
            disabled={isEditable}
            value={formData.tonsOfPropulsion}
            onChange={handleChange}
          />

          <TextField
            margin="dense"
            label="Load Capacity [Ton]"
            name="loadCapacity"
            type="number"
            fullWidth
            required
            variant="outlined"
            disabled={isEditable}
            value={formData.loadCapacity}
            onChange={handleChange}
          />
        </>
      )}

      {formData.type === "CrewedSpacecraft" && (
        <>
          <TextField
            margin="dense"
            label="Speed [Km/h]"
            name="speed"
            type="number"
            fullWidth
            required
            variant="outlined"
            disabled={isEditable}
            value={formData.speed}
            onChange={handleChange}
          />

          <TextField
            margin="dense"
            label="Crew Capacity [persons]"
            name="crewCapacity"
            type="number"
            fullWidth
            required
            variant="outlined"
            disabled={isEditable}
            value={formData.crewCapacity}
            onChange={handleChange}
          />
        </>
      )}

      {formData.type === "UncrewedSpacecraft" && (
        <>
          <TextField
            margin="dense"
            label="Speed [Km/h]"
            name="speed"
            type="number"
            fullWidth
            required
            variant="outlined"
            disabled={isEditable}
            value={formData.speed}
            onChange={handleChange}
          />

          <TextField
            margin="dense"
            label="Tons Of Propulsion [Tons]"
            name="tonsOfPropulsion"
            type="number"
            fullWidth
            required
            variant="outlined"
            disabled={isEditable}
            value={formData.tonsOfPropulsion}
            onChange={handleChange}
          />
        </>
      )}

      <Stack spacing={2} direction="row">
        {isEditable == false && (
          <Button type="submit" fullWidth variant="contained">
            Save
          </Button>
        )}

        {isEditable == true && (
          <>
            <Button
              onClick={createProfile}
              fullWidth
              variant="contained"
              color="error"
            >
              Delete
            </Button>
            <Button onClick={createProfile} fullWidth variant="contained">
              Update
            </Button>
          </>
        )}
      </Stack>
    </Paper>
  );
};
