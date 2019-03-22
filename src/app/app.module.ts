import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AddTodoModule } from './add-todo/AddTodo.module'
import { DisplayTodoModule } from './display-todo/DisplayTodo.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AddTodoModule, DisplayTodoModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
