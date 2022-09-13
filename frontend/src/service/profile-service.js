const URL = "http://localhost:8080";

export const getProfiles = () => {
  return fetch(`${URL}/profile`).then((response) => response.json());
};

export const getProfileById = (id) => {
  return fetch(`${URL}/profile/${id}`).then((response) => response.json());
};

export const createProfile = (profile) => {
  return fetch(`${URL}/profile`, {
    method: "POST",
    body: JSON.stringify(profile),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
