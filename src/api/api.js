import axios from 'axios';

const url = 'http://localhost:5050';

export function getPet() {
    return axios.get(`${url}/pets`);
}

export async function createPet(pet) {
    const response = await axios.post(`${url}/pets`, pet)
    return response.data
}
