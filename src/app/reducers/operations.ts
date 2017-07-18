import { Action, Store } from '@ngrx/store';
import { Operation } from '../models/operation';

import * as operations from '../actions/operations';

export interface State {
    entities: Array<Operation>
}

const initialState: State = { entities: [] };

export function reducer(state = initialState, action: Action): State {
    switch (action.type) {

        case operations.actionTypes.ADD_OPERATION:
            const operation: Operation = action.payload;
            return Object.assign({}, state, {
                entities: state.entities.concat(operation)
            });

        case operations.actionTypes.DELETE_OPERATION:
            return Object.assign({}, state, {
                entities: state.entities.filter(operation =>
                    operation.id !== action.payload.id
                )
            });

        case operations.actionTypes.INCREMENT_OPERATION:
            return Object.assign({}, state, {
                entities: state.entities.map(
                    operation =>
                        (operation.id === action.payload.id) ? Object.assign(
                            {}, operation, {
                                amount: +operation.amount + 1
                            }) : operation
                )
            });

        case operations.actionTypes.DECREMENT_OPERATION:
            return Object.assign({}, state, {
                entities: state.entities.map(operation =>
                    (operation.id === action.payload.id) ? Object.assign(
                        {}, operation, {
                            amount: +operation.amount - 1
                        }) : operation
                )
            });

        default:
            return state;
    }
}

export function getEntities (state$: Store<State>) {
    return state$.select(state => state.entities);
}