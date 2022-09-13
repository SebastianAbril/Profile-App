import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { getProfiles } from "../../service/profile-service";

export function ProfileListScreen() {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);

  const getData = async (searchValue) => {
    const profiles = await getProfiles(searchValue);
    setProfiles(profiles);
  };

  const onRowClick = (id) => {
    navigate("/profile/" + id, { replace: true });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Lastname</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {profiles.map((profile) => (
            <TableRow
              key={profile.id}
              hover={true}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() => onRowClick(profile.id)}
            >
              <TableCell component="th" scope="row">
                {profile.id}
              </TableCell>
              <TableCell>{profile.name}</TableCell>
              <TableCell>{profile.lastName}</TableCell>
              <TableCell>{profile.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
