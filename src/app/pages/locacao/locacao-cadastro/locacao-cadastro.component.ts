import { Component, OnInit } from '@angular/core';
import { Locacao } from 'src/app/models/locacao';
import { FormGroup, FormControl } from '@angular/forms';
import { LocacaoService } from 'src/app/services/locacao.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { RecursoService } from 'src/app/services/recurso.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { Recurso } from 'src/app/models/recurso';

@Component({
  selector: 'app-locacao-cadastro',
  templateUrl: './locacao-cadastro.component.html',
  styleUrls: ['./locacao-cadastro.component.scss'],
  providers:[LocacaoService, UsuarioService, RecursoService]
})
export class LocacaoCadastroComponent implements OnInit {

  public locacao:Locacao = new Locacao();
  public form:FormGroup = new FormGroup({
    id:new FormControl(),
    recurso:new FormControl(),
    usuario:new FormControl(),
    idRecurso:new FormControl(),
    idUsuario:new FormControl(),
    dataCadastro:new FormControl(),
    dataLocacao:new FormControl(),
    dataDevolucao:new FormControl(),
    situacao:new FormControl()
  });
  public usuarios:Usuario[] = [];
  public recursos:Recurso[] = [];

  constructor(private router:Router, private route:ActivatedRoute,
    private usuarioService:UsuarioService, private locacaoService:LocacaoService,
    private recursoService:RecursoService) {

  }

  async ngOnInit() {
    await this.getRecursos();
    await this.getUsuarios();
    this.route.params.subscribe((loc)=>{
      if (loc){
        this.locacaoService.buscarPorId(loc.id).subscribe((locacao)=>{
          this.locacao = locacao;
          this.montarForm(this.locacao);
        })
      }
    });
    
  }

  public async getRecursos(){
    this.recursoService.buscarTodos().subscribe((lista)=>{
      this.recursos = lista;
    });
  }

  public async getUsuarios(){
    this.usuarioService.buscarTodos().subscribe((lista)=>{
      this.usuarios = lista;
    })
  }

  public montarObj(){
    this.locacao = this.form.value;
  }

  public montarForm(locacao:Locacao){
    this.locacao = locacao;
    // this.form.setValue(locacao);
    this.form.controls['id'].setValue(locacao.id);
    this.form.controls['recurso'].setValue(locacao.recurso);
    this.form.controls['usuario'].setValue(locacao.usuario);
    this.form.controls['dataCadastro'].setValue(new Date(locacao.dataCadastro));
    this.form.controls['dataDevolucao'].setValue(new Date(locacao.dataDevolucao));
    this.form.controls['dataLocacao'].setValue(new Date(locacao.dataLocacao));
    this.form.controls['situacao'].setValue(locacao.situacao);

  }

  public salvar(){
    if (this.form.invalid){
      alert('Campos Obrigatórios');
      return ;
    }
    this.montarObj();
    this.locacaoService.salvar(this.locacao).subscribe((loc)=>{
      this.router.navigate(['locacao/pesquisa']);
    })
  }

  compareUsuario(user1:Usuario, user2:Usuario){
    return user1 && user2 && user1.id == user2.id;
  }

  compareRecurso(obj:Recurso, obj2:Recurso){
    return obj && obj2 && obj.id == obj2.id;
  }

}
