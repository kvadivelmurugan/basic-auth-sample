import React, { Component } from 'react'
import './HomeComponent.css'

class HomeComponent extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <div className="card text-left">
                <div className="card-header bg-transparent">
                    <h4>Home</h4>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>                    
                </div>
                <div className="card-footer bg-transparent"><a href="#" className ="btn btn-primary">Go somewhere</a></div>
            </div>
        )
    }

}

export default HomeComponent