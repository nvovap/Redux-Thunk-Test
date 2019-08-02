import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsEditElement } from '../redux/actions'

import './Item.css'

export  class Item extends Component {
    state = {
        overMouse: false,
        showButtonDelete: false,
        name: this.props.name
    }

    handleOver(e){
        console.log('handleOver')
        this.setState({overMouse:true})
    }


    handleOut(e){
        console.log('handleOut')
        this.setState({overMouse:false})
    }


    handleClick(e){
        this.setState((state) => ({
                showButtonDelete: !state.showButtonDelete
            })
        )
    }


    updateInput = e => {

        console.log(e.target.name)
        console.log(e.target.value)

        
        this.setState({
            [e.target.name]: e.target.value
        })


      
      }


    //onMouseOver={this.handleOver.bind(this)} onMouseOut={this.handleOut.bind(this)

   

    render() {
        


        return <div className='Item' onClick={this.handleClick.bind(this)}>
            {this.overMouse}
            {this.state.showButtonDelete ? <input name="name" placeholder="name" onChange={this.updateInput} value={this.state.name}></input> : <div>{this.props.name}</div>}
            {this.state.showButtonDelete ? <button onClick={(e) => {this.props.clickDelete(this.props.id)}}  className="deleteBtn linkBtn">Delete</button> : null }
            {this.state.showButtonDelete ? <button onClick={this.props.itemsEditElement({id: this.props.id, name: this.props.name})}  className="doneBtn linkBtn">Done</button> : null }
        </div>
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        itemsEditElement: ({id, name}) => dispatch(itemsEditElement({id, name})),
    };
};


const mapStateToProps = (state) => {
    return {
       
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);

