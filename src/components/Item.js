import React, {Component} from 'react';


import './Item.css'

class Item extends Component {

    state = {
        showButtonDelete: false,
        texEdit: "",
    }

    componentDidMount() {
        this.setState({
            texEdit: this.props.name
        }) 
    }

    handleClick(e){
        this.setState((state) => ({
                showButtonDelete: !state.showButtonDelete
            })
        )
    }


    
    
    render() {
        return <div className='Item' onClick={this.handleClick.bind(this)}>
        {this.state.showButtonDelete ? <input name="name" placeholder="name" onChange={this.updateInput} value={this.state.texEdit}></input> : <div>{this.props.name}</div>}
        {this.state.showButtonDelete && <button onClick={(e) => {this.props.clickDelete(this.props.id)}}  className="deleteBtn linkBtn">Delete</button>  }
        {this.state.showButtonDelete && <button onClick={(e) => {this.props.itemsEditElement(this.props.id, this.state.texEdit)}}  className="doneBtn linkBtn">Done</button>}
    </div>
    }
}  

export default Item;

