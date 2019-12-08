export default class Weather {
  constructor(data) {
    console.log("[RAW WEATHER API DATA]", data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin?
    //      That is what this data returns! data.main.temp is the temperature in Kelvin

    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name;
    this.F = Math.round((data.main.temp * 9) / 5 - 459.67);
  }
  get weatherTemplate() {
    return ` <div class="flex-row text-dark">${this.city} <h5>${this.F}°</h5></div><div class="sun"></div>`;
    // if (this.F <= 48) {
    //   return `  <div class="flex-row">${this.city} <h5>${this.F}°</h5></div><divclass="cloud"></divclass="cloud">`;
    // } else {
    //   return `<div class="flex-row">${this.city} <h5>${this.F}°</h5></div><divclass="sun"></divclass="sun">`;
    // }
  }
}
