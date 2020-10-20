import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recurso } from '../models/recurso';
import { Observable } from 'rxjs';
import {environment } from './../../environments/environment';

@Injectable()
export class RecursoService {

    public service:string = '/rest/recurso';

    constructor(private http:HttpClient){

    }

    public getUrl(pathEnd){
        return environment.url+this.service+"/"+pathEnd;
    }

    public salvar(recurso:Recurso):Observable<Recurso>{ 
        return this.http.post<Recurso>(this.getUrl('salvar'), recurso);
    }
}