import axios from 'axios';

const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2', // TODO: add environment variables
});

export default pokeApi;
