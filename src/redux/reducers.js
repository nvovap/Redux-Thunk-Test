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
             var oldState = [...state];
             const index = oldState.findIndex(element => element.id === action.id);
             oldState.splice(index, 1);
            return oldState;
        case 'ITEM_EDIT_ELEMENT':
            var oldState2 = [...state];
            const index2 = oldState2.findIndex(element => element.id === action.item.id);
            oldState2[index2] = action.item;
            return oldState2;
        default:
            return state;
    }
}



export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});