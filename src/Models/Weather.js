/* eslint-disable camelcase */
import StringHelper from 'helpers/string';
import weatherIcon from 'helpers/icons';

class WeatherModel {
  constructor({ dt_txt, main, weather }) {
    this.date = dt_txt;
    this.temp = parseInt(main.temp, 10);
    this.tempMax = parseInt(main.temp_max, 10);
    this.tempMin = parseInt(main.temp_min, 10);
    this.feelsLike = parseInt(main.feels_like, 10);
    this.humidity = main.humidity;
    this.description = StringHelper.capitalize(weather[0].description);
    this.icon = weatherIcon(weather[0].icon);
  }

  static fromJson(dayList) {
    dayList.map((day) => {
      console.log('------------------------');
      console.log(day);
    });
    return dayList.map((day) => new WeatherModel(day));
  }
}

export default WeatherModel;

/*
{
"clouds": {"all": 9}, 
"dt": 1604858400, 
"dt_txt": "2020-11-08 18:00:00", 
"main": 
{
		"feels_like": 20.85, 
		"grnd_level": 1016, 
		"humidity": 50, 
		"pressure": 1019, 
		"sea_level": 1019, 
		"temp": 23.77, 
		"temp_kf": 0.49, 
		"temp_max": 23.77, 
		"temp_min": 23.28
	}, 
"pop": 0,
"sys": {"pod": "d"}, 
"visibility": 10000, 
"weather": [{"description": "clear sky", "icon": "01d", "id": 800, "main": "Clear"}], 
"wind": {"deg": 86, "speed": 5.37}
}
*/
