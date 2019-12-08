export default class Quote {
  constructor(data) {
    this.body = data.body;
    this.author = data.author;
  }
  get quoteTemplate() {
    return `
  <h5>${this.author}</h5>
 <p>"${this.body}"</p> 
 `;
  }
}
