import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

interface SignupForm {
  name: FormControl;
  email: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;
}

@Component({
  selector: 'app-singup',
  providers: [LoginService],
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss'],
})
export class SingupComponent {
  signupForm!: FormGroup<SignupForm>;

  constructor(private router: Router, private loginService: LoginService) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    this.loginService
      .signup(
        this.signupForm.value.name,
        this.signupForm.value.email,
        this.signupForm.value.password
      )
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
    this.router.navigate(['login']);
  }
}
