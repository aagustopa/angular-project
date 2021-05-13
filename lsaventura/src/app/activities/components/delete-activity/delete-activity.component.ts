import { Component, OnInit, Input } from '@angular/core';
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
  @Input() id: string;

  constructor(private firestoreService: FirestoreService, private router: Router, private toastr: ToastrService, private aRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  // @Input()
  deleteActivity(id: string) {
    console.log('Eliminar: ' + id);
    this.firestoreService.deleteActivity(id).then(() => {
      console.log('Empleado eliminado con exito');
      this.toastr.error('La actividad fue eliminada con exito', 'Registro Eliminado', {
        positionClass: 'toast-bottom-right'
      })
    }).catch(error => {
      console.log(error);
    })
  }
}
