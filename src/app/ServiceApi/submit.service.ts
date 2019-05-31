import { Injectable } from '@angular/core';
import { AngularFirestore ,AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Submit } from '../models/submit';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {
  submitCollection: AngularFirestoreCollection<Submit>;
  submit: Observable<any[]>;
  submitDoc: AngularFirestoreDocument<Submit>;

  constructor(public db: AngularFirestore) { 
    this.submit = this.db.collection('submit').valueChanges();

    this.submitCollection = db.collection<Submit>('submit');
    
  }

  getSubmit(){
    return this.submit;
  }

  addSubmitData(submit: Submit){
    this.submitCollection.add(submit);
  }
  
}
