import { observable, action, runInAction, computed } from 'mobx';

import WeatherService from 'services/weatherService';
import Geolocation from 'helpers/geolocation';

class HomeStore {
  @observable showSpinner = false;

  @observable cityName = null;

  @observable dayList = [];

  @observable description = null;

  @observable temperature = null;

  @observable sensation = null;

  @observable icon = null;

  today = new Date().toDateString();

  @computed get todayDescription() {
    if (this.dayList.length > 0) {
      return `${this.today} ${this.dayList[0].description}`;
    }

    return null;
  }

  @action async getWeatherForTheCurrentPosition() {
    this.showSpinner = true;

    try {
      Geolocation.requestPermissions();

      const location = await Geolocation.get();

      const currentCity = await WeatherService.get(location);

      runInAction(() => {
        this.cityName = currentCity.name;
        this.dayList = currentCity.dayList;
        this.temperature = `${this.dayList[0].temp} °`;
        this.sensation = `Sensación ${this.dayList[0].feelsLike} °`;
      });
    } catch (error) {
      console.log(' error', error);
    }

    this.showSpinner = false;
  }
}

export default HomeStore;
