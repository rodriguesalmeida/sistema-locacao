import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract.service';
import { Observable } from 'rxjs';
import { Locacao } from '../models/locacao';

@Injectable()
export class LocacaoService extends AbstractService<Locacao> {

    
    constructor(protected http:HttpClient){
        super(http);
    }

    public getPath(){
        return "locacao";
    }

    public buscarPorNome(nome:string):Observable<Array<Locacao>> {
        return this.http.post<Array<Locacao>>(this.getUrl('nome'), nome);
    }
}