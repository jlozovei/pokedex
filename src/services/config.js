import axios from 'axios';

const PokeAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    'Content-Type': 'application/json'
  }
});

PokeAPI.interceptors.response.use(
  function (response) {
    const { status, data } = response;

    return {
      status,
      data
    };
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { PokeAPI };
