import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Operation } from "../models/operation";

@Component({
  selector: 'app-new-operation',
  templateUrl: './new-operation.component.html',
  styleUrls: ['./new-operation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewOperationComponent implements OnInit {
  operation: Operation;

  constructor() {
    this.operation = new Operation();
  }

  @Output() addOperation = new EventEmitter();
  
  ngOnInit() {
  }

}
