import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Operation } from "../models/operation";

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperationListComponent implements OnInit {

  @Input() operations;

  constructor() { }

  ngOnInit() {
  }

  @Output() decrementOperation = new EventEmitter();
  @Output() incrementOperation = new EventEmitter();
  @Output() deleteOperation = new EventEmitter();
  

}
