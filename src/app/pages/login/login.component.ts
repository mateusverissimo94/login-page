import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private router: Router, private loginService: LoginService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    this.loginService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: () =>
          Swal.fire({
            title: 'Sucesso',
            text: 'Login feito com sucesso',
            icon: 'success',
            confirmButtonText: 'Continuar',
          }),
        error: () =>
          Swal.fire({
            title: 'Erro inesperado!',
            text: 'Tente novamente mais tarde',
            icon: 'error',
            confirmButtonText: 'Voltar',
          }),
      });
  }

  navigate() {
    this.router.navigate(['singup']);
  }
}
