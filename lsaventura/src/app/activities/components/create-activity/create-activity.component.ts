import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Activity } from '../../models/Activity';
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
  public weather;
  imagePath;

  public activity: Activity;

  constructor(private firestoreService: FirestoreService, private fb: FormBuilder, private router: Router, private toastr: ToastrService, private weatherService: ActivityService) {
    this.createEmpleado = this.fb.group({
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      prediccion: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  getLogo() {
    try {
      this.weatherService.getLogo('lc').subscribe(imagePath => {
        this.imagePath = imagePath;
        console.log('logo del tiempo' + this.imagePath);
      });
    } catch (e) {
      console.log(`error desde el getlogo ${e}`);
    }
  }
  fillPrediction(fecha) {
    fecha = this.activity.fecha;
    const convertToString = fecha.toString();
    const newDate = convertToString.replace(/-/g, '/');
    try {
      this.weatherService.getWeatherList(newDate).subscribe(weather => {
        this.weather = weather[0].weather_state_name;
        alert(`La prevision segun la api es la siguiente, tiempo: ${this.weather}`);
      });
    } catch (e) {
      console.log(`error desde el create component ${e}`);
    }
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
    }
    this.fillPrediction(this.activity.fecha);
    this.loading = true;
    this.firestoreService.createActivity(this.activity).then(() => {
      this.toastr.success('La actividad fue registrada con exito!', 'Empleado Registrado', {
        positionClass: 'toast-bottom-right'
      });
      this.loading = false;
      console.log('Actividad registrado con exito!');
      this.router.navigate(['/list'])
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }
}
