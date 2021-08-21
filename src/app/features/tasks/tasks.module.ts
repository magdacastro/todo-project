import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { FormTaskComponent } from './components/form-task/form-task.component';


@NgModule({
  declarations: [
    ListTaskComponent,
    FormTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
    ListTaskComponent,
    FormTaskComponent
  ]
})
export class TasksModule { }
