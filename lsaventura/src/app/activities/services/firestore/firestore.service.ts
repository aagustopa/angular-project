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

  //obtener todas las actitividades?
  public getActivities(): Observable<any> {
    // return this.firestore.collection('activities', ref=>ref.orderBy('fecha', 'asc')).snapshotChanges();
    return this.firestore.collection('activities').snapshotChanges();
  }

  //crea una nueva actividad?
  public createActivity(activity: Activity): Promise<any> {
    return this.firestore.collection('activities').add(activity);
  }

  // public createCat(data: {nombre: string, url: string}) {
  //   return this.firestore.collection('cats').add(data);
  // }

  //eliminar actividad
  public deleteActivity(id: string): Promise<any> {
    return this.firestore.collection('activities').doc(id).delete();
  }

  // metodo para actualizar si reutilizamos componentes (para rellenar los campos al actualizar)
  public getEmpleado(id: string): Observable<any> {
    return this.firestore.collection('activities').doc(id).snapshotChanges();
  }

  // actualizar actividad (la acción de actualizar)
  public actualizarActividad(id:string, activity:Activity):Promise<any>{
    return this.firestore.collection('activities').doc(id).update(activity);
  }
}

// 1.git push a mi rama
// 2.voy al main
// 3.git pull del main porsiaka
// 4.en el main hago un git merge de dev1 y git push
// 5.shaestá