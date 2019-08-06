import React, { Component } from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';


import './Item.css'

class Item extends Component {

    state = {
        showButtonDelete: false,
        texEdit: "",
        leftMiddleRight: 0,
    }

    ref1 = React.createRef()
    ref2 = React.createRef()
    ref3 = React.createRef()

    componentDidMount() {
        this.setState({
            texEdit: this.props.name,
            leftMiddleRight: this.props.leftMiddleRight
        })
    }


    handleClick(e) {
        this.setState((state) => ({
            showButtonDelete: true
        })
        )
    }


    updateSelect = (e) => {
        this.setState({
            leftMiddleRight: Number(e.target.value)
        })
    }

    updateInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    HandleClickButtonDone = (e) => {
        e.stopPropagation()

        console.log(this.state)
        //this.ref2.onPress()

        this.setState({
            showButtonDelete: false,
        })

        this.props.itemsEditElement({id: this.props.id, name: this.state.texEdit, leftMiddleRight: this.state.leftMiddleRight})

    }

    render() {
       
        return (
                <div className="Item card"  onClick={this.handleClick.bind(this)}>
                    <img src={this.props.icon} className="card-img-top"  />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">{this.props.text}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{this.state.showButtonDelete ? <input name="texEdit" placeholder="label" onChange={this.updateInput} value={this.state.texEdit}></input> : <div>{this.props.name}</div>}</li>
                        
                        <li className="list-group-item">
                        <ButtonGroup  role="group" aria-label="Basic example" onClick={e => e.stopPropagation()}>
                            <Button disabled={this.state.leftMiddleRight !== 1 && !this.state.showButtonDelete} value={1} onClick={this.updateSelect} active={this.state.leftMiddleRight === 1}  variant="secondary">Left</Button>
                            <Button disabled={this.state.leftMiddleRight !== 2 && !this.state.showButtonDelete} value={2} onClick={this.updateSelect} active={this.state.leftMiddleRight === 2}  variant="secondary">Middle</Button>
                            <Button disabled={this.state.leftMiddleRight !== 3 && !this.state.showButtonDelete} value={3} onClick={this.updateSelect} active={this.state.leftMiddleRight === 3}  variant="secondary">Right</Button>
                        </ButtonGroup>
                        </li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="card-body">
                        {this.state.showButtonDelete && <button onClick={(e) => { this.props.clickDelete(this.props.id) }} className="btn btn-danger">Delete</button>}
                        {this.state.showButtonDelete && <button onClick={this.HandleClickButtonDone.bind(this)} className="btn btn-primary">Done</button>}
                    </div>
                </div>
        )
    }

}

//<img src="..." className="card-img-top" alt="..." />

export default Item;

//.btn:not(:last-child):not(.dropdown-toggle)
//.btn:not(:first-child)