import { Component } from '@angular/core';
import { TodoListService } from '@app/core/todo-list/todo-list.service';
import { TODOItem } from '@app/shared/models/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  public currentTODO: TODOItem = new TODOItem('', '');

  constructor(private todoListService: TodoListService) {}

  get todoList() {
    return this.todoListService.todoList;
  }

  public deleteTodo(id: string) {
    const deleteIndex = this.todoListService.todoList.findIndex((todo) => todo.id === id);
    this.todoListService.todoList.splice(deleteIndex, 1);
  }

  public editTodo(todoItem: TODOItem) {
    this.currentTODO = todoItem;
  }
}
