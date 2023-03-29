import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    let data = this.loginForm.value;
    console.log(data);

    const model = {
      email: data.email,
      password: data.password,
      role: 'admin',
    };
    console.log(model);

    this.loading = true;
    this.service.loginAdmin(model).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        alert('Login Success');
        this.router.navigate(['/tasks']);

        this.loading = false;
      },
      (error) => {
        console.log(error);
        alert(error.error.message);
        this.loading = false;
      }
    );
  }
}
