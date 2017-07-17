import {ActionReducer, Action, State} from '@ngrx/store';
import {Operation} from '../models/operation';

export const ADD_OPERATION = '[Operation] ADD_OPERATION';
export const DELETE_OPERATION = '[Operation] DELETE_OPERATION';
export const INCREMENT_OPERATION = '[Operation] INCREMENT_OPERATION';
export const DECREMENT_OPERATION = '[Operation] DECREMENT_OPERATION';


const initialState: Array<Operation> = [];

export function operationsReducer(state = initialState, action: Action):Array<Operation>  {
    switch(action.type) {
        
        case ADD_OPERATION:
            const operation: Operation = action.payload;
            return state.concat(operation);

        case DELETE_OPERATION:
            return state.filter(operation => 
                operation.id !== action.payload.id
            );

        case INCREMENT_OPERATION:
            return state.map(operation => 
               (operation.id === action.payload.id) ? Object.assign({}, operation, {
                    amount: +operation.amount + 1
                }) : operation
            );

        case DECREMENT_OPERATION:
            return state.map(operation => 
                (operation.id === action.payload.id) ? Object.assign({}, operation, {
                    amount: +operation.amount - 1
                }) : operation
            );

        default:
        return state;
    }
}