import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { FormTaskComponent } from './components/form-task/form-task.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskPageComponent } from './pages/task-page/task-page.component';

@NgModule({
  declarations: [
    ListTaskComponent,
    FormTaskComponent,
    TaskPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ], 
  exports: [
    ListTaskComponent,
    FormTaskComponent,
  ]
})
export class TasksModule { }
