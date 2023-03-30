import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  apiTasks = 'https://crud-tasks-nzcw.onrender.com/tasks/';

  constructor(private http: HttpClient) {}

  getAllTasks() {
    //use Headers
    // let headers = new HttpHeaders();
    // headers = headers.append('Authorization','Bearer '+  localStorage.getItem('token')!);
    // return this.http.get(this.apiTasks, { headers: headers });

    return this.http.get(this.apiTasks + 'all-tasks');
  }

  addTask(model: any) {
    return this.http.post(this.apiTasks + 'add-task', model);
  }

  deleteTask(id: string) {
    return this.http.delete(this.apiTasks + 'delete-task/' + id);
  }
}
