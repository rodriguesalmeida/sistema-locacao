import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[
    UsuarioService
  ]
})
export class LoginComponent implements OnInit {

  public form:FormGroup = new FormGroup({
    email:new FormControl(),
    senha:new FormControl()
  })

  constructor(private router:Router,private usuarioService:UsuarioService) { }

  ngOnInit() {
  }

  public logar(){
    if (this.form.invalid){
      alert('Informe os dados nos campos!');
      return;
    }
    let user = this.form.value;
    this.usuarioService.logar(user).subscribe((user)=>{
      if (user){
        localStorage.setItem('usuario',JSON.stringify(user));
        localStorage.setItem('user_token',user.token);
        this.router.navigate(['home']);
      }
    });
  }

}
