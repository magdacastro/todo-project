import { Component, OnInit } from '@angular/core';
import { Task, Category, Priority } from '../../models/task.module';
import {
  tasks,
  categories,
  priorities,
} from '../../collections/collections.module';
@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
})
export class ListTaskComponent implements OnInit {
  title = 'Lista de tarefas';

  taskStatusById: Record<number, boolean> = {};
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
    return new Date(date).toLocaleDateString();
  }

  ngOnInit(): void {}
}
