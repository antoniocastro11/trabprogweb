import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formData = {
    email: '',
    senha: '',
    tipoCadastro: '',
  };

  emailValido() {
    return (
      this.formData.email.includes('@', 1) &&
      this.formData.email.includes('.', 2)
    );
  }

  senhaValida() {
    return (
      this.formData.senha.length >= 6 &&
      /\d/.test(this.formData.senha) &&
      /[A-Z]/.test(this.formData.senha) &&
      /[a-z]/.test(this.formData.senha)
    );
  }

  constructor(private router: Router) {}

  onSubmit() {
    // Validação básica
    if (
      this.formData.email &&
      this.formData.senha &&
      this.formData.tipoCadastro &&
      this.emailValido() &&
      this.senhaValida()
    ) {
      this.router.navigate(['/inicial']);
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }
}
