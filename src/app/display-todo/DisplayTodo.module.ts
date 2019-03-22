import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { DatePipe } from '@angular/common'
import { DisplayTodo } from './DisplayTodo.component'

@NgModule({
  declarations: [DisplayTodo],
  imports: [BrowserModule],
  exports: [DisplayTodo, DatePipe]
})
export class DisplayTodoModule {}
