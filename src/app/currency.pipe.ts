import { Pipe, PipeTransform } from '@angular/core';
import * as fromRoot from './reducers';
import { Store } from '@ngrx/store';

import fx from 'money';
fx.base = 'USD';

@Pipe({
    name: 'currencyPipe'
})
export class CustomCurrencyPipe implements PipeTransform {
    constructor(private _store: Store<fromRoot.State>) {
        this._store.let(fromRoot.getRates).subscribe(rates => {
            fx.rates = rates;
        });
    }

    transform(value: number, currency): string {
        if(currency) {
            value = fx.convert(value, {from: 'USD', to: currency})
            return currency + ' ' + value;
        } else {
            return 'USD ' + value;
        }
    }
}