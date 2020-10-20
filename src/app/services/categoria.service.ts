import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract.service';
import { Categoria } from '../models/categoria';

@Injectable()
export class CategoriaService extends AbstractService<Categoria> {

    
    constructor(protected http:HttpClient){
        super(http);
    }

    public getPath(){
        return "categoria";
    }
}