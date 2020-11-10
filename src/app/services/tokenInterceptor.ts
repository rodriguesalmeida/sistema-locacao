import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

    constructor(private router:Router){

    }

    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        let token = localStorage.getItem('user_token');
        if (token == null){
            token = '';
        }
        let newReq = null;
        if (!req.headers.get('Content-type')){
            newReq = req.clone({setHeaders:{Authorization:token,'Content-Type':'application/json'}});
        }else {
            newReq = req;
        }
        return next.handle(newReq).pipe(tap(event => {

        }, (error)=>{
            this.router.navigate(['login']);
        }) )
    }
}