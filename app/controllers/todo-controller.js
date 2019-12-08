import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let template = "";
  store.State.todos.forEach(t => (template += t.todoTemplate));
  document.getElementById("todos").innerHTML = template;
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    TodoService.getTodos();
    store.subscribe("todos", _drawTodos);
  }

  async addTodo(e) {
    e.preventDefault();
    var form = e.target;
    var todo = {
      description: form.name.value
      //TODO build the todo object from the data that comes into this method
    };
    try {
      await TodoService.addTodoAsync(todo);
    } catch (error) {
      // debugger;
      console.error("[ERROR]:", error);
    }
    form.reset();
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  async toggleTodoStatus(todoId) {
    try {
      await TodoService.toggleTodoStatusAsync(todoId);
    } catch (error) {
      // debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  async removeTodo(todoId) {
    try {
      await TodoService.removeTodoAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }
}
