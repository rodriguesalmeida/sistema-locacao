import { AbstractEntity } from './abstractentity';

export class Usuario extends AbstractEntity{
    public nome:string;
    public email:string;
    public celular:string;
    public senha:string;
    public token:string;

}