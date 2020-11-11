import WeatherModel from './weather';

class CityModel {
  constructor({ city, list }) {
    this.name = city.name;
    this.dayList = WeatherModel.fromJson(list);
  }

  static fromJson(data) {
    return new CityModel(data);
  }
}

export default CityModel;
