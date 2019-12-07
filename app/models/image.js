export default class Image {
  constructor(data) {
    this.image = data.large_url;
  }
  get imageTemplate() {
    return `<img src="${this.image}" alt="">`;
  }
}
