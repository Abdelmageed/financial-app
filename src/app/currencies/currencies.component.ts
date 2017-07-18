import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrenciesComponent implements OnInit {

  @Input() selectedCurrency: string;
  // selectedCurrency
  @Input() currencies: string[];

  @Output() changeCurrency = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


}
