import { Action } from '@ngrx/store';
import { Operation } from '../models/operation';

export const actionTypes = {
    ADD_OPERATION: '[Operation] ADD_,OPERATION',
    DELETE_OPERATION  : '[Operation] DELETE_OPERATION',
    INCREMENT_OPERATION : '[Operation] INCREMENT_OPERATION',
    DECREMENT_OPERATION : '[Operation] DECREMENT_OPERATION'
}

export class addOperation implements Action {
    type = actionTypes.ADD_OPERATION;

    constructor(public payload: Operation) {}
}

export class DeleteOperation implements Action {
    type = actionTypes.DELETE_OPERATION;

    constructor(public payload: Operation) {}
}

export class IncrementOperation implements Action {
    type = actionTypes.INCREMENT_OPERATION;

    constructor(public payload: Operation) {}
}

export class DecrementOperation implements Action {
    type = actionTypes.DECREMENT_OPERATION;

    constructor(public payload: Operation) {}
}


export type Actions = addOperation
                    |   DeleteOperation
                    |   IncrementOperation
                    |   DecrementOperation;