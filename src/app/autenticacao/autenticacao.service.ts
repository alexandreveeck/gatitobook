import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }

  login(userName: string, password: string): Observable<any> {
    return this.httpClient.post('http://localhost:3000/user/login', {
      userName: userName,
      password: password
    });
  }
}
