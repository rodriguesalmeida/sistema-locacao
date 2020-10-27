import { AbstractEntity } from './abstractentity';
import { Recurso } from './recurso';
import { Usuario } from './usuario';

export class Locacao extends AbstractEntity{
    public dataCadatro:Date;
    public dataLocacao:Date;
    public dataDevolucao:Date;
    public recurso:Recurso;
    public idRecurso:number;
    public usuario:Usuario;
    public idUsuario:number;
    public situacao:number;

}