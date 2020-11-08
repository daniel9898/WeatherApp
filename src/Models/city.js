import WeatherModel from './weather';

class CityModel {
  constructor({ city, list }) {
    this.id = city.id;
    this.name = city.name;
    this.country = city.country;
    this.timezone = city.timezone;
    this.list = WeatherModel.fromJson(list);
  }

  static fromJson(data) {
    return new CityModel(data);
  }
}

export default CityModel;
