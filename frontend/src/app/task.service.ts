import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl:string = "http://localhost:3000/tasks";

  constructor(public api:ConfigService) { }

  getTasks(){
    return this.api.get(this.apiUrl);
  }

  deleteTask(id?:number){
    return this.api.delete(`${this.apiUrl}/${id}`);
  }

  createTask(obj:Object){
     return this.api.post(this.apiUrl, obj);
  }
}
