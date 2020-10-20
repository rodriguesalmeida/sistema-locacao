import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Recurso } from 'src/app/models/recurso';
import { RecursoService } from 'src/app/services/recurso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recurso-cadastro',
  templateUrl: './recurso-cadastro.component.html',
  styleUrls: ['./recurso-cadastro.component.scss'],
  providers:[
    RecursoService
  ]
})
export class RecursoCadastroComponent implements OnInit {

  public form:FormGroup;
  public recurso:Recurso = new Recurso();
  constructor(private router:Router,private recursoService:RecursoService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome:new FormControl(),
      descricao:new FormControl(),
    });
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
