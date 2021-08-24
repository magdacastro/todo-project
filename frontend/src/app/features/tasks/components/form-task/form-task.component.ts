import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Task, Category, Priority } from '../../models/task.model';
import { TaskService } from 'src/app/task.service';
import {
  tasks,
  categories,
  priorities,
} from '../../collections/collections.module';
import { Validator } from '../use-cases/form-task-validator';
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

  getPostData() {
    const newTask = {
      description: this.inputTask,
      date: this.inputDate,
      category: this.inputCategory,
      priority: this.inputPriority,
      checked: false,
    };

    if(Validator.Text(newTask.description) === false) {
      return {
        status: false,
        nessage: 'The description must be filled.',
      };
    }

    if (Validator.Date(newTask.date) === false) {
      return {
        status: false,
        nessage: 'The date field is incorrect.',
      };
    }

    return {
      status: true,
      data: {
        description: this.inputTask,
        date: this.inputDate,
        category: this.inputCategory,
        priority: this.inputPriority,
        checked: false,
      },
    };
  }

  onSubmit() {
    const ValidatorResponse = this.getPostData();

    if (ValidatorResponse.status === true) {
      this.newTaskEvent.emit(<Task>ValidatorResponse.data);
      this.http.createTask(<Task>ValidatorResponse.data);
      this.initValues();
    } else {
      alert(ValidatorResponse.nessage);
    }
  }

  initValues() {
    this.inputTask = '';
    this.inputDate = '';
    this.inputCategory = 1;
    this.inputPriority = 1;
  }

  ngOnInit(): void {}
}
