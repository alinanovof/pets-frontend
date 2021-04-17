import axios from "axios";

export function signup(email, password, fname, lname, tel) {
  return new Promise((res, rej) => {
    axios
      .post(`localhost:5050/register`, {
        email,
        password,
        fname,
        lname,
        tel,
      })
      .then((response) => {
        // if (response.data.token) {
        //   localStorage.setItem("token", response.data.token);
        // }
        res(response.data);
      })
      .catch((error) => {
        console.log("Error occured while signing up", error);
        rej(error);
      });
  });
}

export function login(email, password) {
  return new Promise((res, rej) => {
    axios
      .post(`localhost:5050/login`, {
        email,
        password,
      })
      .then((response) => {
        // if (response.data.token) {
        //   localStorage.setItem("token", response.data.token);
        // }
        res(response.data);
      })
      .catch((e) => {
        console.log("Error occurred while logging in", e);
        rej(e);
      });
  });
}
