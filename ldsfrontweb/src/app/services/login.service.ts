import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReqLoginDto, ResLoginDto } from '../interfaces/login/login.interface';
import { environment } from '../../environments/environment';


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

  constructor(private http: HttpClient) { }

  getLoginData(request: ReqLoginDto):Observable<ResLoginDto> {
      console.log('Login service', request);
      return this.http.post<ResLoginDto>(`${this.urlBase}${environment.endPointLogin}`, request, {headers: this.headersGlobal});
  }


   get headersGlobal():HttpHeaders {
    const headers= new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
 
    return headers;
 }


//  get optionsGlobal():RequestOptions {
//     let options = new RequestOptions({
//         headers: this.headersGlobal
//      });

//      return options;
//  }
 

}
