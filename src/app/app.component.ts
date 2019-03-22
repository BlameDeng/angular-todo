import { Component } from '@angular/core'
import { Todo } from './Todo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = []

  handleAddNewTodo = (todo: Todo) => {
    this.todos.push(todo)
  }

  handleChangeTodoStatus = (id: number) => {
    const todo = this.todos.find(todo => todo.id === id)
    if (todo) {
      todo.done = !todo.done
    }
  }

  handleDeleteTodo = (id: number) => {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }
}
