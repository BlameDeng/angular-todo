import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AddTodo } from './AddTodo.component'

@NgModule({
  declarations: [AddTodo],
  imports: [BrowserModule, FormsModule],
  exports: [AddTodo]
})
export class AddTodoModule {}
