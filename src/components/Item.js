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
                showButtonDelete: true
            })
        )
    }


    updateInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    HandleClickButtonDone = (e) => {
        e.stopPropagation()

        this.setState({
            showButtonDelete: false,
        })

        this.props.itemsEditElement(this.props.id, this.state.texEdit)
        
    }
    
    render() {
        return <div className='Item' onClick={this.handleClick.bind(this)}>
        {this.state.showButtonDelete ? <input name="texEdit" placeholder="label" onChange={this.updateInput} value={this.state.texEdit}></input> : <div>{this.props.name}</div>}
        {this.state.showButtonDelete && <button onClick={(e) => {this.props.clickDelete(this.props.id)}}  className="deleteBtn linkBtn">Delete</button>  }
        {this.state.showButtonDelete && <button onClick={this.HandleClickButtonDone.bind(this)}  className="doneBtn linkBtn">Done</button>}
    </div>
    }
}  

export default Item;