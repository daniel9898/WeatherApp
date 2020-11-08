import axios from 'axios';

import CityModel from 'models/city';

const url = 'https://api.openweathermap.org/data/2.5';
const apiKey = 'c32e560872a9b06aa3c3afc45f6977f3';

const API = axios.create({
  baseURL: url,
  timeout: 3000,
});

class WeatherService {
  static get({ latitude, longitude }) {
    return API.get(
      `/forecast?lat=${latitude}&lon=${longitude}&units=metric&lang=ES&&appid=${apiKey}`,
    ).then((response) => CityModel.fromJson(response.data));
  }
}

export default WeatherService;
