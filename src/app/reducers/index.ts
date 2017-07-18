import { combineReducers, ActionReducer, Store } from '@ngrx/store';

import * as fromOperations from './operations';
import { compose } from "@ngrx/core";
import { Observable } from "rxjs";


export interface State {
    operations: fromOperations.State;
}

export const reducers = {
    operations: fromOperations.reducer
};

const combinedReducers: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return combinedReducers(state, action);
}



export function getOperations (state$: Store<State>) {
    return state$.select(state => state.operations);
}

export const getEntities = compose(fromOperations.getEntities, getOperations);