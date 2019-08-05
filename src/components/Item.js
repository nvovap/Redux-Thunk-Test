import React, {Component} from 'react';


import './Item.css'

class Item extends Component {

    state = {
        showButtonDelete: false,
    }

    handleClick(e){
        this.setState((state) => ({
                showButtonDelete: !state.showButtonDelete
            })
        )
    }


  

    
    render() {
        return <div className='Item' onClick={this.handleClick.bind(this)}>
        {this.state.showButtonDelete ? <input name="name" placeholder="name" onChange={this.updateInput} value={this.props.name}></input> : <div>{this.props.name}</div>}
        {this.state.showButtonDelete && <button onClick={(e) => {this.props.clickDelete(this.props.id)}}  className="deleteBtn linkBtn">Delete</button>  }
        {this.state.showButtonDelete && <button onClick={(e) => {this.props.itemsEditElement(this.props.id, "test edit")}}  className="doneBtn linkBtn">Done</button>}
    </div>
    }
}  

export default Item;

