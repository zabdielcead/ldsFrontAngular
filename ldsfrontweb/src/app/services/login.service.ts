import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieUser, ReqFindUser, ReqLoginDto, ResFindUser, ResLoginDto } from '../interfaces/login/login.interface';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import {Buffer} from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  // private _loginData: ResLoginDto = {
  //   email: '',
  //   jwt: '',
  //   idUsuario: ''
  // };


  private urlBase: string = environment.urlBase;

  constructor(private http: HttpClient,
              private cookieService: CookieService) { }

  getLoginData(request: ReqLoginDto):Observable<ResLoginDto> {
      console.log('Login service', request);
      return this.http.post<ResLoginDto>(`${this.urlBase}${environment.endPointLogin}`, request, {headers: this.headersGlobal});
  }


  getUserData(request: ReqFindUser, jwt: string):Observable<ResFindUser> {
    console.log('Login data User', request);
    return this.http.post<ResFindUser>(`${this.urlBase}${environment.endPoinFindUser}`, request, {headers: this.getheadersJWT(jwt)});
}

 setCookieUser( dataLogin: ResLoginDto, dataUser: ResFindUser){

  
       const cookieData: CookieUser ={
         activo: dataUser.activo,
         cargo: dataUser.cargo,
         email: dataUser.email,
         idPerfil: dataUser.idPerfil,
         idUsuario: dataUser.idUsuario,
         nombre: dataUser.nombre,
         telCasa: dataUser.telCasa,
         telCel: dataUser.telCel,
         jwt: dataLogin.jwt
       }
      
       const objBytesB64= Buffer.from( JSON.stringify(cookieData)).toString('base64');
       
        
       this.cookieService.set(environment.nameCookie,objBytesB64,{expires: 0.00069444});
 
}


deleteCookieUser(){
    this.cookieService.delete(environment.nameCookie);
}

consultaCookieUser(): CookieUser{
  const cookie:string = this.cookieService.get(environment.nameCookie);
  let userFind: CookieUser={
    activo: false,
    cargo: '',
    email: '',
    idPerfil: '',
    idUsuario: '',
    nombre: '',
    telCasa: '',
    telCel: '',
    jwt: ''
  };
  if(cookie){
    userFind= JSON.parse( Buffer.from(this.cookieService.get(environment.nameCookie), 'base64').toString('binary'));
    console.log(userFind);
  }

  console.log('value cookie', userFind);
  
  return userFind;
}


   get headersGlobal():HttpHeaders {
    const headers= new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
 
    return headers;
 }


 private getheadersJWT(jwt: string):HttpHeaders {
  const headers= new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('authlds', jwt);
  return headers;
}


//  get optionsGlobal():RequestOptions {
//     let options = new RequestOptions({
//         headers: this.headersGlobal
//      });

//      return options;
//  }
 

}
