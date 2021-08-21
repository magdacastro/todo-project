import { Component, OnInit } from '@angular/core';
import { Task, Category, Priority } from '../../models/task.module';
import { tasks, categories, priorities, months } from '../../collections/collections.module';
@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
})
export class ListTaskComponent implements OnInit {
  title = 'Lista de tarefas';

  categories: Array<Category>;
  priorities: Array<Priority>;
  tasks: Array<Task>;

  constructor() {
    this.categories = categories;
    this.priorities = priorities;
    this.tasks = tasks;
  }

  onSubmitTask(task: Task) {
    this.tasks.push(task);
  }

  getCategoryName(value: number) {
    return this.categories.find((cat) => cat.value == value)?.name;
  }

  getPriorityName(value: number) {
    return this.priorities.find((prit) => prit.value == value)?.name;
  }

  getDate(date: string) {
    return `${months[new Date(date).getMonth()]} ${new Date(date).getDate()}, ${new Date(date).getFullYear()}`;
  }

  toggleEdit(id?:number){
    this.tasks = this.tasks.map(_task => {
      if(_task.id === id){
        _task.checked = !_task.checked;
      }
      return _task;
    });
  }

  deleteItem(id?:number){
    let pos = this.tasks.findIndex(index => index.id === id);
    this.tasks.splice(pos,1);
  }

  ngOnInit(): void {}
}
