import { Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { Activity } from '../../models/Activity';
import { element } from 'protractor';
import { ToastrService } from 'ngx-toastr';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.component.html',
  styleUrls: ['./list-activity.component.css']
})
export class ListActivityComponent implements OnInit {

  @Input() actividad: Activity;

  public activities: Activity[] = [];
  public isLogged: boolean = false;
  faCoffee = faCoffee;
  
  constructor(private firestoreService: FirestoreService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.firestoreService.getActivities().subscribe((activitiesSnapShot) => {
      this.activities = [];
      activitiesSnapShot.forEach((activityData: any) => {
        this.activities.push({
          id: activityData.payload.doc.id,
          nombre: activityData.payload.doc.data().nombre,
          fecha: activityData.payload.doc.data().fecha,
          prediccion: activityData.payload.doc.data().prediccion
        });
      })
    })
  }

  updateAct(){
    console.log('Actualizando');
  }
}


