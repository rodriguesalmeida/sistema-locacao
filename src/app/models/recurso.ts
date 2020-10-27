import { AbstractEntity } from './abstractentity';
import { Categoria } from './categoria';

export class Recurso extends AbstractEntity{
    public nome:string;
    public categoria:Categoria;

}