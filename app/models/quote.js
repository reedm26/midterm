export default class Quote {
  constructor(data) {
    this.body = data.body;
    this.author = data.author;
  }
  get quoteTemplate() {
    return `
    <div class="alert alert-dark m-2"
    <h5>${this.author}
    <marquee role="alert">"${this.body}"</marquee> 
    </h5>
    </div>
 `;
  }
}
