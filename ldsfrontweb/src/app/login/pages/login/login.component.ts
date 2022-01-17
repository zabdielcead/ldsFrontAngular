import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { ReqLoginDto } from '../../../interfaces/login/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loadingSpinner = false;
  title: string = 'Login LDS Tacubaya';
  errorMsg: boolean = false;


  miFormulario: FormGroup  = this.fb.group({
    user:['', Validators.required],
    pass:['', Validators.required]
  })

  constructor(private fb:FormBuilder,
              private loginService: LoginService
    ) { }


    campoNoValido(campo: string){
      return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
    }


  ngOnInit(): void {
  }

  login(){
    console.log('loginrespuesta');
    this.loadingSpinner = true;
    this.loginService.getLoginData(this.dataRequest).subscribe(
        next => {
          console.log('response', next);
          this.errorMsg = false;
        },
        error =>{
          console.log('error res')
          this.errorMsg = true;
          this.loadingSpinner = false;
        },() =>{
          //console.log('error fin');
          this.errorMsg = false;
          this.loadingSpinner = false;
        }
    )

  }
  logout(){

  }


  get dataRequest():ReqLoginDto{

    

    let reqLogin: ReqLoginDto = {
      idUsuario: '',
      email: '',
      pass: ''
    };

    const user: string  = this.miFormulario.get('user')?.value;
    const pass: string = this.miFormulario.get('pass')?.value;

    if(user.includes('@')){
      //es email
      reqLogin.email = user;
    }else{
      // es user
      reqLogin.idUsuario = user;
    }


    reqLogin.pass = pass;




    return reqLogin;
  }

  

}
