import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   //ta3ml copier interceptor 5ater orginal manejch tmes fiha
    const newRequest = request.clone({
    headers:request.headers.append('Authorization','Bearer '+  localStorage.getItem('token')!)
    })
    console.log(newRequest);
    
    return next.handle(newRequest);
  }
}
