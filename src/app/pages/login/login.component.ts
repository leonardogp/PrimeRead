import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.router.navigate(['/home']);
//    if (this.loginForm.valid) {
//      this.apiService.login(this.loginForm.value).subscribe(response => {
//        // Manejar la respuesta del login
//        if (response.success) {
//          this.router.navigate(['/home']);
//        } else {
//          
//        }
//      });
//    }
  }
}