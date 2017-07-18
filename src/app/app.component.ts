import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import 'rxjs/add/operator/let';

import { Operation } from "./models/operation";
import * as fromRoot from './reducers/';
import * as operations from './actions/operations';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  id: number = 0;
  operations: Observable<Operation[]>;

  constructor(private _store: Store<fromRoot.State>) {
    this.operations = _store.let(fromRoot.getEntities);
  }

  addOperation(operation) {
    this._store.dispatch(new operations.addOperation({
        id: ++this.id,
        reason: operation.reason,
        amount: operation.amount
      }));
  }

  incrementOperation(operation) {
    this._store.dispatch(new operations.IncrementOperation(operation));
  }

  decrementOperation(operation) {
    this._store.dispatch(new operations.DecrementOperation(operation));
  }

  deleteOperation(operation) {
    this._store.dispatch(new operations.DeleteOperation(operation));
  }
}