import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService} from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria-cadastro',
  templateUrl: './categoria-cadastro.component.html',
  styleUrls: ['./categoria-cadastro.component.scss'],
  providers:[
    CategoriaService
  ]
})
export class CategoriaCadastroComponent implements OnInit {

  public categoria:Categoria;
  public form:FormGroup;

  constructor(private router:Router, private route:ActivatedRoute,
    private categoriaService:CategoriaService) { 

  }

  ngOnInit() {
    this.form = new FormGroup({
      id:new FormControl(null),
      nome:new FormControl(null,[Validators.required]) 
    });
    this.route.params.subscribe((param) =>{
      if ( param ){
        this.categoria = param as Categoria;
        this.form.patchValue(this.categoria);
      }      
    })
  }

  public salvar(){
    if (this.form.invalid){
      alert('Existem campos inválidos!');
      return;
    }
    this.categoria = this.form.value;
    this.categoriaService.salvar(this.categoria).subscribe((cat)=>{
      alert('Salvo com sucesso!');
      this.router.navigate(['categoria/pesquisa']);
    }, err =>{
      alert('Deu erro, tente novamente');
      console.error(err);
    });
  }
}
