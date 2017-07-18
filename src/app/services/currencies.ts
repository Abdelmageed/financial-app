import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CurrencyService {
    constructor (private http: Http) {}

    loadCurrencies() {
        return this.http.get('http://api.fixer.io/latest?base=USD')
            .map(response => response.json().rates)
            .catch(error => {throw error;})
    }
}