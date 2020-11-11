/* eslint-disable camelcase */
import StringHelper from 'helpers/string';

class WeatherModel {
  constructor(date, { temp_max, temp_min }, temp, feels_like, weather) {
    this.date = date;
    this.temp = parseInt(temp, 10);
    this.tempMax = parseInt(temp_max, 10);
    this.tempMin = parseInt(temp_min, 10);
    this.feelsLike = parseInt(feels_like, 10);
    // this.description = StringHelper.capitalize(description);
  }

  static fromJson(dayList) {
    const newArray = WeatherModel.getMinMaxTempByDay(dayList);
    console.log('Min Max array ', newArray);
    return newArray;
  }

  static getMinMaxTempByDay(dayList) {
    return dayList.reduce((acc, day) => {
      console.log(' DIA ------------------------');
      console.log(day);

      const { dt_txt, temp, feels_like } = day;
      const date = dt_txt.split(' ')[0];

      if (acc[date]) {
        acc[date].temp_max = Math.max(acc[date].temp_max, day.main.temp_max);
        acc[date].temp_min = Math.min(acc[date].temp_min, day.main.temp_min);
      } else {
        acc[date] = {
          temp_max: day.main.temp_max,
          temp_min: day.main.temp_min,
        };
      }
      return new WeatherModel(date, acc[date], temp, feels_like);
    }, []);
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
