import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
import {Activity} from '../../models/Activity';


@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.component.html',
  styleUrls: ['./list-activity.component.css']
})
export class ListActivityComponent implements OnInit {

  public activities :Activity [];

  constructor(private firestoreService:FirestoreService) { }

  ngOnInit(): void {
    this.firestoreService.getActivities().subscribe((activitiesSnapShot) =>{
      this.activities=[];
      activitiesSnapShot.forEach((activityData:any) =>{
        this.activities.push({
          id:activityData.payload.doc.id,
          nombre:activityData.payload.doc.data(),
          fecha:activityData.payload.doc.data(),
          prediccion:activityData.payload.doc.data()
        });
      })
    })
  }

}

// this.firestoreService.getActivities()
//       .snapshotChanges()
//       .subscribe((item) => {
//         this.activities = [];
//         item.forEach(element => {
//           let x = element.payload.toJSON();
//           x["$key"] = element.key;
//           this.activities.push(x as Activity);
//         });
//       });

