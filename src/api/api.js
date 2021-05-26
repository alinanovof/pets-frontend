import axios from "axios";

const url = "https://my-best-friend-alinanovof.herokuapp.com";

function authHeaders(token) {
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
}

export function getPets(token) {
  return axios.get(`${url}/pets`, authHeaders(token));
}

export function getUsers(token) {
  return axios.get(`${url}/users/all`, authHeaders(token));
}

export async function createPet(id, pet, token) {
  const response = await axios.post(
    `${url}/pets`,
    { id, pet },
    authHeaders(token)
  );
  return response.data;
}

export async function addPetPic(id, pictureUrl, token) {
  const response = await axios.post(
    `${url}/pets/${id}/picture_url`,
    pictureUrl,
    authHeaders(token)
  );
  return response.data;
}

export async function updatePet(id, pet, token) {
  const response = await axios.put(
    `${url}/pets/${id}`,
    pet,
    authHeaders(token)
  );
  return response.data;
}

export async function updatePetPic(id, pictureUrl, token) {
  const response = await axios.put(
    `${url}/pets/${id}/picture_url`,
    pictureUrl,
    authHeaders(token)
  );
  return response.data;
}

export async function updateOwner(id, userId, adoptStatus, token) {
  const response = await axios.put(
    `${url}/pets/me/${id}`,
    { userId, adoptStatus },
    authHeaders(token)
  );
  return response.data;
}

export async function getUser(token) {
  const response = await axios.get(`${url}/users`, authHeaders(token));
  return response.data;
}

export async function deletePet(id, token) {
  const response = await axios.delete(`${url}/pets/${id}`, authHeaders(token));
  return response.data;
}

export async function getPetById(id, token) {
  const response = await axios.get(url + "/pets/" + id, authHeaders(token));
  return response.data;
}

export async function getPetsByUserId(token) {
  const response = await axios.get(`${url}/pets/me`, authHeaders(token));
  return response.data;
}

export async function updateUser(user, userId, token) {
  const response = await axios.put(
    `${url}/users/${userId}`,
    user,
    authHeaders(token)
  );
  return response.data;
}

export async function getSearch(type, token) {
  const response = await axios.get(
    `${url}/pets/search/${type}`,
    authHeaders(token)
  );
  return response.data;
}
