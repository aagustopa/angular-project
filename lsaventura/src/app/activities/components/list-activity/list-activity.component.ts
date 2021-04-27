import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.component.html',
  styleUrls: ['./list-activity.component.css']
})
export class ListActivityComponent implements OnInit {

  public activities = [];

  constructor(private firestoreService:FirestoreService) { }

  ngOnInit(): void {
    this.firestoreService.getActivities().subscribe((activitiesSnapShot) =>{
      this.activities=[];
      activitiesSnapShot.forEach((activityData:any) =>{
        this.activities.push({
          id:activityData.payload.doc.id,
          data:activityData.payload.doc.data()
        });
      })
    })
  }

}
