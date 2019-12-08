export default class Todo {
  constructor(data) {
    this.completed = data.completed;
    this.desc = data.description;
    this.id = data._id;
  }
  get todoTemplate() {
    if (this.completed == false) {
      return `<li class="text-light"> <input onclick="app.todoController.toggleTodoStatus('${this.id}')" type="checkbox">   ${this.desc}
      <button class="btn-sm btn-dark" type="button" onclick="app.todoController.removeTodo('${this.id}')">x</button>
      </li>
      `;
    } else {
      return `<li style="text-decoration: line-through" class="text-light"> <input checked onclick="app.todoController.toggleTodoStatus('${this.id}')" type="checkbox">   ${this.desc}
      <button class="btn-sm btn-dark" type="button" onclick="app.todoController.removeTodo('${this.id}')">x</button>
      </li>
      `;
    }
  }
}
