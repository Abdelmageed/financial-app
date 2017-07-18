import { combineReducers, ActionReducer, Store } from '@ngrx/store';

import * as fromOperations from './operations';
import * as fromCurrencies from './currencies';

import { compose } from "@ngrx/core";
import { Observable } from "rxjs";


export interface State {
    operations: fromOperations.State;
    currencies: fromCurrencies.State;
}

export const reducers = {
    operations: fromOperations.reducer,
    currencies: fromCurrencies.reducer
};

const combinedReducers: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return combinedReducers(state, action);
}



export function getOperations (state$: Store<State>) {
    return state$.select(state => state.operations);
}

export function getCurrencies (state$: Store<State>) {
    return state$.select(s => s.currencies);
}

export const getEntities = compose(fromOperations.getEntities, getOperations);

export const getCurrenciesEntities = compose(fromCurrencies.getCurrenciesEntities, getCurrencies);

export const getSelectedCurrency = compose(fromCurrencies.getSelectedCurrency, getCurrencies);

export const getRates = compose(fromCurrencies.getRates, getCurrencies);
