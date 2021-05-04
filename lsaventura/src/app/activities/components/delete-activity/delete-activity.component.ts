import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { Activity } from '../../models/Activity';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-activity',
  templateUrl: './delete-activity.component.html',
  styleUrls: ['./delete-activity.component.css']
})
export class DeleteActivityComponent implements OnInit {

  id: string;

  public activity: Activity;

  constructor(private firestoreService: FirestoreService, private router: Router, private toastr: ToastrService, private aRoute: ActivatedRoute) {
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log('ID ' + this.id + ' del constructor');
  }

  ngOnInit(): void {
    console.log('--- ngOnInit del componente delete ---');
    console.warn(this.id);
    this.deleteActivity(this.id);
  }

  deleteActivity(id: string) {
    this.firestoreService.deleteActivity(id).then(() => {
      console.log('Empleado eliminado con exito');
      this.toastr.error('La actividad fue eliminada con exito', 'Registro Eliminado', {
        positionClass: 'toast-bottom-right'
      })
    }).catch(error => {
      console.log(error);
    })
    this.router.navigate(['/list']);
  }
}
