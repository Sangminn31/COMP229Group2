import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';


// intercept() gets HTTPRequest object, change it and forward to HttpHandler object’s handle() method. 
// It transforms HTTPRequest object into an Observable<HttpEvents>.
// next: HttpHandler object represents the next interceptor in the chain of interceptors. 
// The final ‘next’ in the chain is the Angular HttpClient.

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true,
    });

    return next.handle(req);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];
