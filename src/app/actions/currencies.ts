import { Action } from '@ngrx/store';

export const actionTypes = {
    CHANGE_CURRENCY: '[Currencies] CHANGE_CURRENCY',
    LOAD_CURRENCY_RATES: '[Currencies] LOAD_CURRENCY_RATES',
    LOAD_RATES_COMPLETE: '[Currencies] LOAD_RATES_COMPLETE'
};

export class changeCurrency implements Action {
    type = actionTypes.CHANGE_CURRENCY;

    constructor(public payload: string){}
}

export class loadCurrencyRates implements Action {
    type = actionTypes.LOAD_CURRENCY_RATES;

    constructor(public payload: any){}
}

export class loadRatesComplete implements Action {
    type = actionTypes.LOAD_RATES_COMPLETE;

    constructor(public payload: object[]){}
}

export type Actions = changeCurrency
                    | loadCurrencyRates
                    | loadRatesComplete;