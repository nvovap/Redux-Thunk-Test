import React, { Component } from 'react';
import {Button} from 'react-bootstrap';


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
                        <div className="btn-group" role="group" aria-label="Basic example" onClick={e => e.stopPropagation()}>
                            <Button ref={this.ref1} variant="secondary">Left</Button>
                            <button id="not first" ref={this.ref2} type="button" className="btn btn-secondary">Middle</button>
                            <button ref={this.ref3} type="button" className="btn btn-secondary first-child">Right</button>
                        </div>
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