import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lol.gamepedia.com/index.php?title=Special:CargoExport',
});

export default api;
