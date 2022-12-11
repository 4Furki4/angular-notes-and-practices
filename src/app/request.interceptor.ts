import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}
  token : string = "bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IkZ1cmthbiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJleHAiOjE2NzEwMjYzMTZ9.X7q2oyqotmWyooLzveaS4zBIZPA3EDIcjN3_s37m-cFNIORjI0vDwyXHNK8gpEkMFYsW03xiib2rHjTiIeezow";
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const header = new HttpHeaders().append
    (
      'Authorization',
      this.token
    )
      if(request.url.includes('/api/Dictionary')){
      const newRequest = request.clone({headers: header})
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
