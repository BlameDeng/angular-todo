import { Component, Output, EventEmitter } from '@angular/core'
import { Todo } from '../Todo'

@Component({
  selector: 'add-todo',
  templateUrl: './AddTodo.component.html',
  styleUrls: ['./AddTodo.component.scss']
})
export class AddTodo {
  content: string
  id = 0

  @Output() addNewTodo = new EventEmitter<Todo>()

  handleClickAdd = () => {
    if (!this.content) return
    this.addNewTodo.emit(new Todo(++this.id, this.content, new Date(), false))
    this.content = ''
  }
}
