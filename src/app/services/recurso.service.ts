import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from './abstract.service';
import { Recurso } from '../models/recurso';

@Injectable()
export class RecursoService extends AbstractService<Recurso> {

    
    constructor(protected http:HttpClient){
        super(http);
    }

    public getPath(){
        return "recurso";
    }
}