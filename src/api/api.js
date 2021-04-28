import axios from "axios";

const url = "http://localhost:5050";

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

export async function createPet(pet, token) {
  const response = await axios.post(`${url}/pets`, pet, authHeaders(token));
  return response.data;
}

export async function updatePet(id, pet, token) {
  const response = await axios.put(`${url}/pets/${id}`, pet, authHeaders(token));
  return response.data;
}

export async function updateOwner(id, userId, adoptStatus, token) {
    console.log(token)
    const response = await axios.put(`${url}/pets/me/${id}`, {userId, adoptStatus}, authHeaders(token));
    return response.data;
  }

export async function getUser(token) {
  return axios.get(`${url}/users`, authHeaders(token));
}

// export async function deletePet(pet, token){
//     return axios.delete(`${url}/pets/:id`, authHeaders(token))
// }

export async function getPetById(id, token) {
  const response = await axios.get(url + "/pets/" + id, authHeaders(token));
  return response.data;
}

export async function getPetsByUserId(token) {
  const response = await axios.get(`${url}/pets/me`, authHeaders(token));
  return response.data;
}
