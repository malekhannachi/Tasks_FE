import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiAuth = 'https://crud-tasks-nzcw.onrender.com';
  constructor(private http: HttpClient) {}

  loginAdmin(model: any) {
    return this.http.post(this.apiAuth + '/auth/login', model);
  }
}
