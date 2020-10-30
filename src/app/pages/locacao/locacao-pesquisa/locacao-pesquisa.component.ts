import { Component, OnInit } from '@angular/core';
import { LocacaoService } from 'src/app/services/locacao.service';
import { MatTableDataSource } from '@angular/material/table';
import { Locacao } from 'src/app/models/locacao';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locacao-pesquisa',
  templateUrl: './locacao-pesquisa.component.html',
  styleUrls: ['./locacao-pesquisa.component.scss'],
  providers:[
    LocacaoService
  ]
})
export class LocacaoPesquisaComponent implements OnInit {

  public displayedColumns:any[] = ['id','dataCadastro','dataLocacao','dataDevolucao','recurso','usuario','situacao', 'acoes'];
  public dataSource:MatTableDataSource<Locacao> = new MatTableDataSource();
  public form:FormGroup = new FormGroup({
    pesquisar:new FormControl('')
  })
  constructor(private router:Router,private locacaoService:LocacaoService) {
  }

  ngOnInit() {
    this.locacaoService.buscarTodos().subscribe((lista)=>{
      this.dataSource = new MatTableDataSource(lista);
    })
  }

  public pesquisar(){
    let nome = this.form.controls['pesquisar'].value;
    this.locacaoService.buscarPorNome(nome).subscribe((lista)=>{
      this.dataSource = new MatTableDataSource(lista);
    })
  }

  public novo(){
    this.router.navigate(['locacao/cadastro']);
  }

  public alterar(locacao:Locacao){
    this.router.navigate(['locacao/cadastro', locacao]);
  }

  public excluir(locacao:Locacao){
    this.locacaoService.excluir(locacao.id).subscribe(()=>{
      alert('Removido!');
      this.pesquisar();
      
    }, err =>{
      console.log('Falha ao Excluir', err);
    })
  }
}
