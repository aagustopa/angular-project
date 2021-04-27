import { Component, OnInit } from '@angular/core';
import { Activity } from '../../models/Activity';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent implements OnInit {

  public activity: Activity;

  constructor(private firestoreService : FirestoreService) { }

  ngOnInit(): void {
  }

}
