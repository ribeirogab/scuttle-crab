import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://lol.gamepedia.com/index.php?title=Special:CargoExport',
});

export default apiService;
