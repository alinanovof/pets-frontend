import axios from "axios";
const baseUrl = "https://my-best-friend-alinanovof.herokuapp.com";

export async function signup(email, password, passwordConfirmation, first_name, last_name, tel) {
  const response = await axios.post(baseUrl + `/users`, {
    email,
    password,
    passwordConfirmation,
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

