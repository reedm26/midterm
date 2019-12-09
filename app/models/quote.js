export default class Quote {
  constructor(data) {
    this.body = data.body;
    this.author = data.author;
  }
  get quoteTemplate() {
    return `
  <marquee>${this.author}</marquee>
 <p class="alert alert-dark" role="alert">"${this.body}"</p> 
 `;
  }
}
