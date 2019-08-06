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
        itemsEditElement : (url, item) => dispatch(itemsEditElement(url, item))
    };
};

class ItemList extends Component {


    componentDidMount() {
        console.log("ListItems")
        this.props.fetchData('http://5d496e352d59e50014f2140c.mockapi.io/items');
        //this.props.getErrorFive();
    }

    handlerClickDelete = (id) => {
        this.props.deleteItem(id);
    }

    handlerClickEditLeftMiddleRight = () => {
 
        this.props.items.map((elem) => {
            if (elem.leftMiddleRight > 5000 && elem.leftMiddleRight <= 30000) {
                elem.leftMiddleRight = 1;
            } else if (elem.leftMiddleRight > 30000 && elem.leftMiddleRight <= 60000) {
                elem.leftMiddleRight = 2;
            } else if (elem.leftMiddleRight > 60000) {
                elem.leftMiddleRight = 3;
            }

            this.props.itemsEditElement('http://5d496e352d59e50014f2140c.mockapi.io/items', elem);

        })


    }


    handlerClickEdit = ({id, name, leftMiddleRight}) => {
        console.log('============ EDIT ==================');

        const index = this.props.items.findIndex(element => element.id === id);

        const item = this.props.items[index];

        item.label = name;

        item.leftMiddleRight = leftMiddleRight

        this.props.itemsEditElement('http://5d496e352d59e50014f2140c.mockapi.io/items', item);
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
                <button onClick={this.handlerClickEditLeftMiddleRight}>Edit </button>
                {this.props.items.map((elem) => (
                    <Item key={elem.id} id={elem.id} name={elem.label} leftMiddleRight={elem.leftMiddleRight} icon={elem.icon} text={elem.text} clickDelete={this.handlerClickDelete} itemsEditElement={this.handlerClickEdit} />
                ))}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);