import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Task, Category, Priority } from '../../models/task.model';
import { TaskService } from 'src/app/task.service';
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

  categories: Array<Category>;
  priorities: Array<Priority>;
  tasks: Array<Task>;

  inputTask: string;
  inputDate: string;
  inputCategory: number;
  inputPriority: number;

  constructor(public http: TaskService) {
    this.categories = categories;
    this.priorities = priorities;
    this.tasks = tasks;
    this.inputTask = '';
    this.inputDate = '';
    this.inputCategory = 1;
    this.inputPriority = 1;
  }

  onSubmit() {
    const newTask = {
      description: this.inputTask,
      date: this.inputDate,
      category: this.inputCategory,
      priority: this.inputPriority,
      checked: false,
    };

    this.newTaskEvent.emit(newTask);
    this.http.createTask(newTask);
    this.initValues();
  }

  initValues() {
    this.inputTask = '';
    this.inputDate = '';
    this.inputCategory = 1;
    this.inputPriority = 1;
  }

  ngOnInit(): void {}
}
