import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from './abstract.service';
import { Recurso } from '../models/recurso';
import { Observable } from 'rxjs';

@Injectable()
export class RecursoService extends AbstractService<Recurso> {

    
    constructor(protected http:HttpClient){
        super(http);
    }

    public getPath(){
        return "recurso";
    }

    public buscarPorNome(nome:string):Observable<Array<Recurso>> {
        return this.http.post<Array<Recurso>>(this.getUrl('nome'), nome);
    }
}