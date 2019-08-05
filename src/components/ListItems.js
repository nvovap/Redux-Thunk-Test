import React, { Component } from 'react';
import  Item  from './Item';
import { connect } from 'react-redux';
import { itemsFetchData, errorAfterFiveSeconds, itemsDeleteElementSuccess, itemsEditElement } from '../redux/actions';

import './ListItems.css'

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        getErrorFive: () => dispatch(errorAfterFiveSeconds()),
        deleteItem: (id) => dispatch(itemsDeleteElementSuccess(id)),
        itemsEditElement : ({id, name}) => dispatch(itemsEditElement({id, name}))
    };
};

class ItemList extends Component {


    componentDidMount() {
        console.log("ListItems")
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
        //this.props.getErrorFive();
    }

    handlerClickDelete = (id) => {
        this.props.deleteItem(id);
    }


    handlerClickEdit = (id, name) => {
        console.log('============ EDIT ==================');
        this.props.itemsEditElement({id, name});
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <div className='ListItem'>
                {this.props.items.map((elem) => (
                    <Item key={elem.id} id={elem.id} name={elem.label} clickDelete={this.handlerClickDelete} itemsEditElement={this.handlerClickEdit} />
                ))}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);