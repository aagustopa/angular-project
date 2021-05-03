import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Activity } from '../../models/Activity';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.css']
})
export class UpdateActivityComponent implements OnInit {

  updateActivity: FormGroup;
  submitted = false;
  loading = false;
  id: string;

  public activity: Activity;

  constructor(private firestoreService: FirestoreService, private fb: FormBuilder, private router: Router, private toastr: ToastrService, private aRoute: ActivatedRoute) {
    this.updateActivity = this.fb.group({
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      prediccion: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    this.esEditar();
  }

  actualizarActividad() {
    this.submitted = true;

    if (this.updateActivity.invalid) {
      return;
    }

    if (this.id === null) {
      console.log('Vete a crear empleado crack');
    } else {
      this.editarActividad(this.id);
    }
  }

  // accion para actualizar
  editarActividad(id: string) {
    this.activity = {
      nombre: this.updateActivity.value.nombre,
      fecha: this.updateActivity.value.fecha,
      prediccion: this.updateActivity.value.prediccion
    }
    this.loading = true;

    this.firestoreService.actualizarActividad(id, this.activity).then(() => {
      this.loading = false;
      this.toastr.info('La actividad fue modificada con exito', 'Actividad Modificada', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['/list']);
    })
  }

  // cargar valores PARA actualizar en los inputs
  esEditar() {
    this.firestoreService.getEmpleado(this.id).subscribe(data => {
      this.loading = false;
      console.log('actualizar');
      console.log(data.payload.data()['nombre']);
      this.updateActivity.setValue({
        nombre: data.payload.data()['nombre'],
        fecha: data.payload.data()['fecha'],
        prediccion: data.payload.data()['prediccion']
      })
    })
  }

}
