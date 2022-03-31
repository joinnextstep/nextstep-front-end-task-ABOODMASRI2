import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/model/task';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
 serviceURL: string;
  constructor(private http :HttpClient) { 
    this.serviceURL="https://api.joinnextstep.com/api/todo"
   
  }
  addTask(task : Task) : Observable<Task> {
    return this.http.post<Task>(this.serviceURL,task);
  }

  getALLTask() : Observable<Task[]> {
    return this.http.get<Task[]>(this.serviceURL);
  }


deleteTask(task : Task) : Observable<Task> {
    return this.http.delete<Task>(this.serviceURL+'/'+task.id);
  }

  editTask(task : Task) : Observable<Task> {
    return this.http.put<Task>(this.serviceURL+'/'+task.id,task);
  }

  

  ngOnInit(): void {
  }

}
