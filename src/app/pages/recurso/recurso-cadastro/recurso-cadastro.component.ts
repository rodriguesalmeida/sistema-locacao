import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Recurso } from 'src/app/models/recurso';
import { RecursoService } from 'src/app/services/recurso.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-recurso-cadastro',
  templateUrl: './recurso-cadastro.component.html',
  styleUrls: ['./recurso-cadastro.component.scss'],
  providers:[
    RecursoService, CategoriaService
  ]
})
export class RecursoCadastroComponent implements OnInit {

  public form:FormGroup;
  public recurso:Recurso = new Recurso();
  public categorias:Categoria[] = [];
  constructor(private router:Router,private recursoService:RecursoService,
    private formBuilder:FormBuilder,private route:ActivatedRoute,
    private categoriaService:CategoriaService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id:new FormControl(),
      nome:new FormControl(),
      categoria:new FormControl(),
    });    
    this.getCategorias();
    this.route.params.subscribe((param)=>{
      this.recurso = param as Recurso;
      if (this.recurso){
        this.form.patchValue(this.recurso);
      }
    })
  }

  public getCategorias(){
    this.categoriaService.buscarTodos().subscribe((lista)=>{
      this.categorias = lista;
    })
  }
  public compareCategoria(cat1:Categoria,cat2:Categoria){
    return cat1 === cat2 && cat1.id == cat2.id;
  }

  public salvar(){
    if (this.form.invalid){
      alert('Campos Obrigatórios!');
      return;
    }
    this.recurso = this.form.value;
    this.recursoService.salvar(this.recurso).subscribe((rec)=>{
      this.recurso = rec;
      this.router.navigate(['recurso/pesquisa']);
    },error =>{
      console.log(error);
    });
  }

}
