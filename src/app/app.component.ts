import { Component } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  doc,
  getDoc,
} from '@angular/fire/firestore';
import { setDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos$: Observable<any>;
  input: any = '';

  constructor(private firestore: Firestore) {
    const coll = collection(firestore, 'todo'); // collection from Firebase-data
    this.todos$ = collectionData(coll);

    this.todos$.subscribe((newTodos) => {
      // Subsciribe to call the function
      console.log('Neue Todos;', newTodos);
    });
  }
  addTodo() {
    const coll = collection(this.firestore, 'todo');
    setDoc(doc(coll), { name: this.input });
    this.input = '';
  }

  remove() {
    const coll = collection(this.firestore, 'todo');
    coll.delete();
  }
}
