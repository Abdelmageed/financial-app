import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyService {
    constructor (private http: Http) {}

    loadCurrencies() {
        return this.http.get('http://fixer.io/latest?base=USD')
            .map(response => response.json().rates)
            .catch(error => {throw error;})
    }
}