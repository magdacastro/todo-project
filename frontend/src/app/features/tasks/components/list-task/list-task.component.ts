import { Component, OnInit } from '@angular/core';
import { Task, Category, Priority, Filter } from '../../models/task.model';
import { tasks, categories, priorities, filters, months } from '../../collections/collections.module';
import { TaskService } from 'src/app/task.service';
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
  filters: Filter;

  constructor(public http: TaskService) {
    this.categories = categories;
    this.priorities = priorities;
    this.tasks = tasks;
    this.filters = filters;
    this.http.getTasks().subscribe(data => {
        this.tasks = data;
    });
  }

  onSubmitTask(task: Task) {
    this.tasks.push(task);
  }

  toggleEdit(id?:number){
    this.tasks = this.tasks.map(_task => {
      if(_task.id === id){
        _task.checked = !_task.checked;
      }
      return _task;
    });
  }

  getTasks():Array<Task>{
    return this.tasks.filter(task => {
      let e = new RegExp(this.filters.description, 'i');
      if(e.test(task.description) != true){
        return null;
      }
      return task;
    });
  }

  deleteItem(id?:number){
    let pos = this.tasks.findIndex(index => index.id === id);
    this.tasks.splice(pos,1);
    this.http.deleteTask(id);
  }


  ngOnInit(): void {}
}
