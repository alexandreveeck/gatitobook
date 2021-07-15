import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = '';
  password = '';

  constructor(private authService: AutenticacaoService, private router: Router) { }

  ngOnInit(): void { }

  login() {
    this.authService.login(this.user, this.password).subscribe(() => {
      this.router.navigate(['animais']);
    }, (error) => {
      alert('Username or password invalid');
      console.log("error: ", error);
    })
  }

}
