import { Component, OnInit } from '@angular/core';
import { Task, Category, Priority } from '../../models/task.module';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
})

export class ListTaskComponent implements OnInit {

  title = 'Lista de tarefas';

  taskStatusById: Record<number, boolean> = {};

  categories: Array<Category> = [
    { name: 'Work', value: 1 },
    { name: 'Home', value: 2 },
    { name: 'Shopping', value: 3 },
  ];

  priorities: Array<Priority> = [
    { name: 'High', value: 1 },
    { name: 'Medium', value: 2 },
    { name: 'Low', value: 3 },
  ];

  tasks: Array<Task> = [
    {
      id: 1,
      checked: true,
      description: 'Preparar reunião de planejamento.',
      date: '2021/08/20',
      category: 1,
      priority: 1,
    },
    {
      id: 2,
      checked: false,
      description: 'Levar o cachorro para passear.',
      date: '2021/08/18',
      category: 2,
      priority: 2,
    },
  ];

  constructor() {
  }

  getCategoryName(value:number) {
    return this.categories.find(cat => cat.value == value)?.name;
  }

  getPriorityName(value:number) {
    return this.priorities.find(prit => prit.value == value)?.name;
  }

  getDate(date:string){
    return new Date(date).toLocaleDateString();
  }

  ngOnInit(): void {}
}
