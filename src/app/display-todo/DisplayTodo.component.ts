import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Todo } from '../Todo'

@Component({
  selector: 'display-todo',
  templateUrl: './DisplayTodo.component.html',
  styleUrls: ['./DisplayTodo.component.scss']
})
export class DisplayTodo {
  @Input() todos: Todo[] = []
  @Output() changeTodoStatus = new EventEmitter<number>()
  @Output() deleteTodo = new EventEmitter<number>()

  trackByTodos = (index: number, todo: Todo): number => todo.id

  formatDate

  handleClickBox = (id: number) => {
    this.changeTodoStatus.emit(id)
  }

  handleClickDelete = (id: number) => {
    this.deleteTodo.emit(id)
  }
}
