import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { itemsFetchData, errorAfterFiveSeconds, itemsDeleteElementSuccess } from '../redux/actions';


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
        deleteItem: (id) => dispatch(itemsDeleteElementSuccess(id))
    };
};

class ItemList extends Component {


    componentDidMount() {
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
        //this.props.getErrorFive();
    }

    handlerClickDelete = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul>
                {this.props.items.map((item) => (
                    <li key={item.id}>
                        {item.label}
                        <button onClick={(e) => {this.handlerClickDelete(item.id)}}  className="deleteBtn linkBtn">Delete</button>
                    </li>
                ))}
            </ul>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);