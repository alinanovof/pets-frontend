import axios from "axios";
const baseUrl = "http://localhost:5050";

export async function signup(email, password, first_name, last_name, tel) {
  const response = await axios.post(baseUrl + `/users`, {
    email,
    password,
    first_name,
    last_name,
    tel,
  });
  return response.data;
}

export async function login(email, password) {
  const response = await axios.post(`${baseUrl}/users/login`, {
    email, password
  });
  return response.data;
}

