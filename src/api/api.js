import axios from 'axios';

const url = 'http://localhost:5050';

function authHeaders(token){
    return {
        headers: {
            Authorization: 'Bearer ' + token,
        }
    }
}

export function getPets(token) {
    return axios.get(`${url}/pets`, authHeaders(token));
}

export async function createPet(pet, token) {
    const response = await axios.post(`${url}/pets`, pet,
    authHeaders(token)
    )
    return response.data
}

export async function getUser(token){
    return axios.get(`${url}/users`, authHeaders(token))
}