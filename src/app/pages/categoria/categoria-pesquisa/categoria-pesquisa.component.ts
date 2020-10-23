import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Categoria } from 'src/app/models/categoria';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria-pesquisa',
  templateUrl: './categoria-pesquisa.component.html',
  styleUrls: ['./categoria-pesquisa.component.scss'],
  providers:[
    CategoriaService 
  ]
})
export class CategoriaPesquisaComponent implements OnInit {
  public displayedColumns:any[] = ['id','nome', 'acoes'];
  public dataSource:MatTableDataSource<Categoria> = new MatTableDataSource();
  public form:FormGroup = new FormGroup({
    pesquisar:new FormControl('')
  })
  constructor(private router:Router,private categoriaService:CategoriaService) {
  }

  ngOnInit() {
    this.categoriaService.buscarTodos().subscribe((lista)=>{
      this.dataSource = new MatTableDataSource(lista);
    })
  }

  public pesquisar(){
    let nome = this.form.controls['pesquisar'].value;
    this.categoriaService.buscarPorNome(nome).subscribe((lista)=>{
      this.dataSource = new MatTableDataSource(lista);
    })
  }

  public novo(){
    this.router.navigate(['categoria/cadastro']);
  }

  public alterar(categoria:Categoria){
    this.router.navigate(['categoria/cadastro', categoria]);
  }

  public excluir(categoria:Categoria){
    this.categoriaService.excluir(categoria.id).subscribe(()=>{
      alert('Removido!');
      this.pesquisar();
      
    }, err =>{
      console.log('Falha ao Excluir', err);
    })
  }
}
