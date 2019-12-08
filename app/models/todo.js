export default class Todo {
  constructor(data) {
    this.completed = data.completed;
    this.desc = data.description;
    this.id = data._id;
  }
  get todoTemplate() {
    return `<li class="text-light">${this.desc}
    <button class="btn-sm btn-danger" type="button" onclick="">x</button>
    </li>
  `;
  }
}
