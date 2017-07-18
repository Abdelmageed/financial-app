import { Store } from '@ngrx/store';
import * as currencies from '../actions/currencies';
import { Observable } from "rxjs/Rx";

export interface State {
    entities: string[],
    selectedCurrency: string,
    rates: object[]
}

const initialState: State = {
    entities: ['GBP', 'EUR'],
    selectedCurrency: 'GBP',
    rates: []
};

export function reducer(state = initialState, action: currencies.Actions): State{
    switch (action.type) {

        case currencies.actionTypes.CHANGE_CURRENCY:
            return {...state, selectedCurrency: action.payload}

        default:
            return state;
    }
}


export function getCurrenciesEntities(state$: Store<State>) {
    return state$.select(s => s.entities);
}

export function getSelectedCurrency(state$: Store<State>) {
    return state$.select(s => s.selectedCurrency);
}

export function getRates(state$: Store<State>) {
    return state$.select(s => s.rates);
}