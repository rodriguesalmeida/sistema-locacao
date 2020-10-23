import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract.service';
import { Categoria } from '../models/categoria';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriaService extends AbstractService<Categoria> {

    
    constructor(protected http:HttpClient){
        super(http);
    }

    public getPath(){
        return "categoria";
    }

    public buscarPorNome(nome:string):Observable<Array<Categoria>> {
        return this.http.post<Array<Categoria>>(this.getUrl('nome'), nome);
    }
}