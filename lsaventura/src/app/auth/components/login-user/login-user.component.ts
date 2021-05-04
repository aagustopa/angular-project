import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/User';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  loginForm: FormGroup;
  public user: User;

  constructor(private authService$: FirestoreService, private fb: FormBuilder, private auth: AngularFireAuth, private toastr: ToastrService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    console.log(this.loginForm);
  }
  logIn() {
    console.log('hola');
    console.log(this.loginForm);
    this.user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.authService$.login(this.user.email, this.user.password).then((result) => {
      if (result) {
        this.toastr.success('El usuario fue logeado con exito', 'Inicio de sesión correcto', {
          positionClass: 'toast-bottom-right'
        })
        this.router.navigate(['/list']);
      } else {
        this.toastr.error('Email o contraseña incorrecta', 'Datos erroneos, try again', {
          positionClass: 'toast-bottom-right'
        })
      }
    }).catch(error => {
      console.log(error);
    });
  }
  // crear guard, editar el guard para comprobar si estoy logeado, en ese guard

}
