import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Activity } from '../../models/Activity';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  //crea una nueva actividad?
  public createActivity(activity: Activity) {
    return this.firestore.collection('activities').add(activity);
  }

  //obtener todas las actitividades?
  public getActivities() {
    return this.firestore.collection('activities').snapshotChanges();
  }
}
