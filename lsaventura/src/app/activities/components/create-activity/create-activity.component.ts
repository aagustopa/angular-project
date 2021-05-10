import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Activity } from '../../models/Activity';
import { Weather } from '../../models/Weather';
import { ActivityService } from '../../services/activity.service';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent implements OnInit {

  createEmpleado: FormGroup;
  submitted = false;
  loading = false;
  // public weather: Weather;
  public weather;

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

  constructor(private firestoreService: FirestoreService, private fb: FormBuilder, private router: Router, private toastr: ToastrService, private weatherService: ActivityService) {
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
    // this.fastGet();
    try {
      this.weatherService.getWeatherList().subscribe(weather => {
        this.weather = weather;
        console.log(this.weather);
      });
    } catch (e) {
      console.log(`error desde el create component ${e}`);
    }
  }

  fastGet(): void {
    this.weather = this.weatherService.getWeather();
  }

  agregarActividad() {
    this.submitted = true;

    if (this.createEmpleado.invalid) {
      return;
    }
    this.activity = {
      // id:'',
      nombre: this.createEmpleado.value.nombre,
      fecha: this.createEmpleado.value.fecha,
      prediccion: this.createEmpleado.value.prediccion
      // fechaCreacion:new Date(),
      // fechaActualizacion:new Date()
    }
    this.loading = true;
    // console.log(empleado);
    this.firestoreService.createActivity(this.activity).then(() => {
      this.toastr.success('La actividad fue registrada con exito!', 'Empleado Registrado', {
        positionClass: 'toast-bottom-right'
      });
      this.loading = false;
      console.log('Empleado registrado con exito!');
      this.router.navigate(['/list'])
    }).catch(error => {
      console.log(error);
      this.loading = false;
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
