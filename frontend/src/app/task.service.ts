import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Task, UnsavedTask } from './features/tasks/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl:string = "http://localhost:3000/tasks";

  constructor(public api:ConfigService) { }

  getTasks(){
    return this.api.get<Task[]>(`${this.apiUrl}?_sort=id&_order=desc`);
  }

  deleteTask(id:number){
    return this.api.delete(`${this.apiUrl}/${id}`);
  }

  createTask(obj:UnsavedTask){
     return this.api.post<Task>(this.apiUrl, obj);
  }
}
