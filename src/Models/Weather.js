class WeatherModel {
  constructor({ city, list }) {
    this.id = city.id;
    this.name = city.name;
    this.country = city.country;
    this.timezone = city.timezone;
    this.coord = {
      lat: city.coord.lat,
      lon: city.coord.lon,
    };
    this.list = list;
  }

  static fromJson(data) {
    return new WeatherModel(data);
  }
}

export default WeatherModel;
