import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { ReqFindUser, ReqLoginDto, ResFindUser, ResLoginDto, CookieUser } from '../../../interfaces/login/login.interface';
import { map, switchMap } from 'rxjs/operators';

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
    //conultarcookie

    console.log('cookie');
    this.loginService.consultaCookieUser();

  }

  login() {
    console.log('loginrespuesta');
    this.loadingSpinner = true;
    let dataLogin!: ResLoginDto;
    let dataUser!: ResFindUser;

      this.loginService.getLoginData(this.dataRequest).pipe(
          switchMap( res => {
            dataLogin = res;
            console.log('primer response', res);
  
            return this.loginService.getUserData(this.dataUserRequest(dataLogin.idUsuario,dataLogin.email), dataLogin.jwt)
          })
      ).pipe(
          map(resp =>{
            console.log('segundo response response', resp);
            dataUser = resp;

             this.loginService.setCookieUser(dataLogin, dataUser);

          })
      ).subscribe(
        next => {
          console.log('response', next);
          this.errorMsg = false;
        },
        error =>{
          console.log('error res')
          this.errorMsg = true;
          this.loadingSpinner = false;
          return;
        },() =>{
          //console.log('error fin');
          this.errorMsg = false;
          this.loadingSpinner = false;
        }
      );


      
    }

    

    /*
    

     this.loginService.getLoginData(this.dataRequest).subscribe(
        next => {
          console.log('response', next);
          this.errorMsg = false;
          dataLogin = next;
        },
        error =>{
          console.log('error res')
          this.errorMsg = true;
          this.loadingSpinner = false;
          return;
        },() =>{
          //console.log('error fin');
          this.errorMsg = false;
          //this.loadingSpinner = false;
        }
      
    )
    // si existe vamos por la data del usuario

    let dataUser!: ResFindUser;
    this.loginService.getUserData(this.dataUserRequest(dataLogin.idUsuario,dataLogin.email), dataLogin.jwt).subscribe(
      next => {
        console.log('response getUserData', next);
        this.errorMsg = false;
        dataUser = next;
      },
      error =>{
        console.log('error res')
        this.errorMsg = true;
        this.loadingSpinner = false;
        return;
      },() =>{
        //console.log('error fin');
        this.errorMsg = false;
        this.loadingSpinner = false;
      }
    
  )
    
    
    */
    

  
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

   dataUserRequest(idUsuario: string, email:string):ReqFindUser{

    

    let reqLogin: ReqFindUser = {
      idUsuario: idUsuario,
      email: email,
     
    };

  




    return reqLogin;
  }


  

  

}
