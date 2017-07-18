import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import * as currencyActions from '../actions/currencies';

import { CurrencyService } from '../services/currencies';
import { loadRatesComplete } from "../actions/currencies";

@Injectable()
export class CurrencyEffects {
    constructor(
        private _actions: Actions,
        private _currencyService: CurrencyService) { }

    @Effect()
    loadRates$: Observable<Action> = this._actions.ofType(currencyActions.actionTypes.LOAD_CURRENCY_RATES)
        .switchMap(() => this._currencyService.loadCurrencies()
            .map((rates) => new loadRatesComplete(rates))
            .catch(() => Observable.of(new loadRatesComplete([])))
        )
}