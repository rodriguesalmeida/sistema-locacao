import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from './abstract.service';
import { Recurso } from '../models/recurso';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable()
export class UsuarioService extends AbstractService<Usuario> {

    
    constructor(protected http:HttpClient){
        super(http);
    }

    public getPath(){
        return "usuario";
    }

    public buscarPorNome(nome:string):Observable<Array<Usuario>> {
        return this.http.post<Array<Usuario>>(this.getUrl('nome'), nome);
    }
}