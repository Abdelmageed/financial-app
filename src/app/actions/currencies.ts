import { Action } from '@ngrx/store';

export const actionTypes = {
    CHANGE_CURRENCY: '[Currencies] CHANGE_CURRENCY'
};

export class changeCurrency implements Action {
    type = actionTypes.CHANGE_CURRENCY;

    constructor(public payload: string){}
}

export type Actions = changeCurrency;