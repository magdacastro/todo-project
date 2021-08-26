import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Task, Category, Priority, UnsavedTask } from '../../models/task.model';
import { TaskService } from 'src/app/task.service';
import {
  tasks,
  categories,
  priorities,
} from '../../collections/collections.module';
import { Validator } from '../use-cases/form-task-validator';
export interface PostDataSuccess {
  status: true;
  data: UnsavedTask;
}

export interface PostDataFailure {
  status: false;
  message: string;
}

export type PostData = PostDataSuccess | PostDataFailure;


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

  getPostData(): PostData {
    const newTask: UnsavedTask = {
      description: this.inputTask,
      date: this.inputDate,
      category: this.inputCategory,
      priority: this.inputPriority,
      checked: false,
    };

    if(Validator.Text(newTask.description) === false) {
      return {
        status: false,
        message: 'The description must be filled.',
      };
    }

    if (Validator.Date(newTask.date) === false) {
      return {
        status: false,
        message: 'The date field is incorrect.',
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

      this.http.createTask(ValidatorResponse.data)
        .subscribe({
          next: (next) => {
            this.newTaskEvent.emit(next);
            this.initValues();
          },
          error: () => {
            alert('submit error')
          }
        });
    } else {
      alert(ValidatorResponse.message);
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
