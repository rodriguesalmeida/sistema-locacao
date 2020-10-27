import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Recurso } from 'src/app/models/recurso';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RecursoService } from 'src/app/services/recurso.service';

@Component({
  selector: 'app-recurso-pesquisa',
  templateUrl: './recurso-pesquisa.component.html',
  styleUrls: ['./recurso-pesquisa.component.scss'],
  providers:[
    RecursoService
  ]
})
export class RecursoPesquisaComponent implements OnInit {

  public displayedColumns:any[] = ['id','nome','categoria', 'acoes'];
  public dataSource:MatTableDataSource<Recurso> = new MatTableDataSource();
  public form:FormGroup = new FormGroup({
    pesquisar:new FormControl('')
  })
  constructor(private router:Router,private recursoService:RecursoService) {
  }

  ngOnInit() {
    this.recursoService.buscarTodos().subscribe((lista)=>{
      this.dataSource = new MatTableDataSource(lista);
    })
  }

  public pesquisar(){
    let nome = this.form.controls['pesquisar'].value;
    this.recursoService.buscarPorNome(nome).subscribe((lista)=>{
      this.dataSource = new MatTableDataSource(lista);
    })
  }

  public novo(){
    this.router.navigate(['recurso/cadastro']);
  }

  public alterar(recurso:Recurso){
    this.router.navigate(['recurso/cadastro', recurso]);
  }

  public excluir(recurso:Recurso){
    this.recursoService.excluir(recurso.id).subscribe(()=>{
      alert('Removido!');
      this.pesquisar();
      
    }, err =>{
      console.log('Falha ao Excluir', err);
    })
  }

}
