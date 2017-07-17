import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Operation } from "./models/operation";
import { ADD_OPERATION, INCREMENT_OPERATION, DECREMENT_OPERATION, DELETE_OPERATION } from "./reducers/operations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  id: number = 0;
  operations;

  constructor(private _store: Store<Array<Operation>>) {
    this.operations = _store.select('operations');
  }

  addOperation(operation) {
    this._store.dispatch({
      type: ADD_OPERATION,
      payload: {
        id: ++this.id,
        reason: operation.reason,
        amount: operation.amount
      }
    });
    console.log(operation);
  }

  incrementOperation(operation) {
    this._store.dispatch({
      type: INCREMENT_OPERATION,
      payload: operation
    });
  }

  decrementOperation(operation) {
    this._store.dispatch({
      type: DECREMENT_OPERATION,
      payload: operation
    });
  }

  deleteOperation(operation) {
    this._store.dispatch({
      type: DELETE_OPERATION,
      payload: operation
    });
  }
}