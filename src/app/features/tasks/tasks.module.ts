import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTaskComponent } from './components/list-task/list-task.component';



@NgModule({
  declarations: [ListTaskComponent],
  imports: [
    CommonModule
  ], 
  exports: [
    ListTaskComponent
  ]
})
export class TasksModule { }
