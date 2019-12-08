export default class Todo {
  constructor(data) {
    this.completed = data.completed;
    this.desc = data.description;
    this.id = data._id;
  }
  get todoTemplate() {
    return `<li class="text-light"><input type="checkbox">   ${this.desc}
       <button class="btn-sm btn-dark" type="button" onclick="app.todoController.removeTodo('${this.id}')">x</button>
    </li>
  `;
  }
}
