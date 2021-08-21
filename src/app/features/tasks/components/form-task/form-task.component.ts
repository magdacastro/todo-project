import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Task, Category, Priority } from '../../models/task.module';
import {
  tasks,
  categories,
  priorities,
} from '../../collections/collections.module';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.scss'],
})
export class FormTaskComponent implements OnInit {
  @Output() newTaskEvent = new EventEmitter<Task>();
  taskStatusById: Record<number, boolean> = {};
  categories: Array<Category>;
  priorities: Array<Priority>;
  tasks: Array<Task>;

  inputTask: string = '';
  inputDate: string = '';
  inputCategory: number = 0;
  inputPriority: number = 0;

  constructor() {
    this.categories = categories;
    this.priorities = priorities;
    this.tasks = tasks;
  }

  onSubmit() {
    this.newTaskEvent.emit({
      description: this.inputTask,
      date: this.inputDate,
      category: this.inputCategory,
      priority: this.inputPriority,
      checked: false,
    });
  }

  ngOnInit(): void {}
}
