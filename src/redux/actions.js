export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsDeleteElementSuccess(id) {
    return {
        type: 'ITEMS_DELETE_ELEMENT_SUCCESS',
        id
    };
}



export const itemsEditElement = (url, item) => (dispatch) => {

    const _url = ''+url+'/'+item.id;
    fetch(_url, {
			method: 'PUT',
			body: JSON.stringify(item),
			headers: {
			  "Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
            if (response.status === 200)
                return response.json();
            else {
                dispatch(itemsHasErrored(true))
            }
		}).then(json => {
			dispatch({ type: 'ITEM_EDIT_ELEMENT', item});
		}).catch(() => dispatch(itemsHasErrored(true)));

    
}

export function itemsDeleteElement(id) {
    return (dispatch) => {
        dispatch(itemsDeleteElementSuccess(id));
    }
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}


export function errorAfterFiveSeconds() {
    // We return a function instead of an action object
    
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        setTimeout(() => {
            // This function is able to dispatch other action creators
            dispatch(itemsHasErrored(true));
            dispatch(itemsIsLoading(false));
        }, 5000);
    };
}