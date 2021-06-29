import axios from 'axios';
import { cityWeatherInfo } from '../helpers_api/open';

export default class Weather {
  async find(city, displayLoader) {
    displayLoader();
    const { data } = await axios.get(cityWeatherInfo(city));
    this.weatherInfo = data;
    return this;
  }

  get() {
    return this.weatherInfo;
  }
}