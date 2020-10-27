import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-pesquisa',
  templateUrl: './usuario-pesquisa.component.html',
  styleUrls: ['./usuario-pesquisa.component.scss'],
  providers:[
    UsuarioService
  ]
})
export class UsuarioPesquisaComponent implements OnInit {

  public displayedColumns:any[] = ['id','nome','email','celular', 'acoes'];
  public dataSource:MatTableDataSource<Usuario> = new MatTableDataSource();
  public form:FormGroup = new FormGroup({
    pesquisar:new FormControl('')
  })
  constructor(private router:Router,private usuarioService:UsuarioService) {
  }

  ngOnInit() {
    this.usuarioService.buscarTodos().subscribe((lista)=>{
      this.dataSource = new MatTableDataSource(lista);
    })
  }

  public pesquisar(){
    let nome = this.form.controls['pesquisar'].value;
    this.usuarioService.buscarPorNome(nome).subscribe((lista)=>{
      this.dataSource = new MatTableDataSource(lista);
    })
  }

  public novo(){
    this.router.navigate(['usuario/cadastro']);
  }

  public alterar(usuario:Usuario){
    this.router.navigate(['usuario/cadastro', usuario]);
  }

  public excluir(usuario:Usuario){
    this.usuarioService.excluir(usuario.id).subscribe(()=>{
      alert('Removido!');
      this.pesquisar();
    }, err =>{
      console.log('Falha ao Excluir', err);
    })
  }

}
