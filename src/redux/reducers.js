import { combineReducers } from 'redux';


function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;
        case 'ITEMS_DELETE_ELEMENT_SUCCESS':
             var oldState = state;
             oldState.splice(action.id, 1);
            return oldState;
        default:
            return state;
    }
}



export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});