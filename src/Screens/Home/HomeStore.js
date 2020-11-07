import { observable, action, computed, runInAction } from 'mobx';

import WeatherService from 'Services/WeatherService';
import Geolocation from 'Helpers/Geolocation';

class HomeStore {
  @observable showSpinner = false;

  constructor() {
    this.getWeatherForTheCurrentPosition();
  }

  @action async getWeatherForTheCurrentPosition() {
    this.showSpinner = true;

    try {
      Geolocation.requestPermissions();

      const location = await Geolocation.get();

      console.log('location ', location);

      const response = await WeatherService.get(location);
      console.log('CIUDAD ----------- ', response.country);
    } catch (error) {
      console.log('error', error);
    }

    this.showSpinner = false;
  }
}

export default HomeStore;
