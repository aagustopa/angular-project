import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Activity } from '../../models/Activity';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent implements OnInit {

  createEmpleado: FormGroup;
  submitted = false;

  public activity: Activity;

  // SHIT CODE
  // public data;
  // public documentId = null;
  // public currentStatus = 1;
  // public newActivityForm = new FormGroup({
  //   nombre: new FormControl('', Validators.required),
  //   fecha: new FormControl('', Validators.required),
  //   prediccion: new FormControl('', Validators.required)
  // })

  constructor(private firestoreService: FirestoreService, private fb: FormBuilder, private router:Router) {
    this.createEmpleado = this.fb.group({
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      prediccion: ['', Validators.required]
    })

    // SHIT CODE
    // this.newActivityForm.setValue({
    //   nombre: '',
    //   fecha: '',
    //   prediccion: ''
    // });
  }

  ngOnInit(): void {
  }

  agregarActividad() {
    this.submitted = true;

    if (this.createEmpleado.invalid) {
      return;
    }
    this.activity = {
      nombre: this.createEmpleado.value.nombre,
      fecha: this.createEmpleado.value.fecha,
      prediccion: this.createEmpleado.value.prediccion
      // fechaCreacion:new Date(),
      // fechaActualizacion:new Date()
    }
    // console.log(empleado);
    this.firestoreService.createActivity(this.activity).then(() =>{
      console.log('Empleado registrado con exito!');
      this.router.navigate(['/list'])
    }).catch(error =>{
      console.log(error);
    })
  }

  // comprobando el event del formulario
  submitForm(event) {
    console.log('HOLA');
  }

  // CODIGO DE MIERRRRRDA DEL TUTORIAL DE MEDIUM
  // newActivity(event) {
  //   event.preventDefault();
  //   this.firestoreService.createActivity(this.data).then(() => {
  //     console.log('Actividad creada exitósamente!');
  //     this.newActivityForm.setValue({
  //       nombre: '',
  //       fecha: '',
  //       prediccion: ''
  //     });
  //   }, (error) => {
  //     console.error(error);
  //   });
  // }

}
