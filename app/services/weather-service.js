import Weather from "../models/weather.js";
import store from "../store.js";

// @ts-ignore
const weatherApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
  timeout: 3000
});

class WeatherService {
  async getWeather() {
    console.log("Calling the Weatherman");
    let res = await weatherApi.get("");
    debugger;
    store.commit("weather", new Weather(res.data));
    console.log(store.State.weather);
  }
}

const weatherService = new WeatherService();
export default weatherService;