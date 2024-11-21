import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  formData = {
    email: '',
    senha: '',
    tipoCadastro: ''
  };

  emailValido() {
    return this.formData.email.includes('@', 1) && this.formData.email.includes('.', 2);
  }

  constructor(private router: Router) {}

  onSubmit() {
    // Validação básica
    if (this.formData.email && this.formData.senha && this.formData.tipoCadastro && this.emailValido()) {
      console.log('Formulário válido:', this.formData);
      this.router.navigate(['/inicial']);
    } else {
      alert('Preencha todos os campos corretamente!');
      console.log('Formulário inválido:', this.formData);
    }
  }
}