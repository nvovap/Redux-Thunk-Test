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


    handleClickDone(e){
        this.props.itemsEditElement({id: this.props.id, name: this.props.name})
    }

    
    render() {
        return <div className='Item' onClick={this.handleClick.bind(this)}>
        {this.state.showButtonDelete ? <input name="name" placeholder="name" onChange={this.updateInput} value={this.props.name}></input> : <div>{this.props.name}</div>}
        {this.state.showButtonDelete && <button onClick={(e) => {this.props.clickDelete(this.props.id)}}  className="deleteBtn linkBtn">Delete</button>  }
        {this.state.showButtonDelete && <button onClick={this.handleClickDone.bind(this)}  className="doneBtn linkBtn">Done</button>}
    </div>
    }
}  

export default Item;

