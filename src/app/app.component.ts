import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos$: Observable<any>;
  todos: Array<any>;

  constructor(firestore: Firestore) {
    const coll = collection(firestore, 'todo'); // collection from Firebase-data
    this.todos$ = collectionData(coll);

    this.todos$.subscribe((newTodos) => {
      // Subsciribe to call the function
      console.log('Neue Todos;', newTodos);
      this.todos = newTodos;
    });
  }
}
