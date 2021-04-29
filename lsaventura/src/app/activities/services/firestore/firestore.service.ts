import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Activity } from '../../models/Activity';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  //crea una nueva actividad?
  public createActivity(activity: Activity): Promise<any> {
    return this.firestore.collection('activities').add(activity);
  }

  // public createCat(data: {nombre: string, url: string}) {
  //   return this.firestore.collection('cats').add(data);
  // }

  //obtener todas las actitividades?
  public getActivities(): Observable<any> {
    return this.firestore.collection('activities').snapshotChanges();
  }
}
