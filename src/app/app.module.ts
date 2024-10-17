import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StdDashboardComponent } from './shared/component/std-dashboard/std-dashboard.component';
import { StdFormComponent } from './shared/component/std-form/std-form.component';
import { StdTableComponent } from './shared/component/std-table/std-table.component';
import { FormsModule } from '@angular/forms';
import { TodoDashboardComponent } from './shared/component/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './shared/component/todo-form/todo-form.component';
import { TodoListComponent } from './shared/component/todo-list/todo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    StdDashboardComponent,
    StdFormComponent,
    StdTableComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
