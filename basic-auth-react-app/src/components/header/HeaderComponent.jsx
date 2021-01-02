/**
 * This is the HeaderComponent
 * 
 * 
 * Developed by vini technology solutions
 */
import React, { Component } from 'react'
import './HeaderComponent.css'

class HeaderComponent extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <>
                <nav id="navMain" className="navbar navbar-expand-lg navbar-dark bg-faded">
                    <a className="navbar-brand" href="/home"><img src="/images/logo.jpg" height="20" width="20"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contacts">Contacts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Expenses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Events</a>
                            </li>                        
                            <li className="nav-item">
                                <a className="nav-link" href="#">Notes</a>
                            </li>                        
                            <li className="nav-item">
                                <a className="nav-link" href="#">Todo</a>
                            </li>                        
                        </ul>
                        <ul className="nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Profile
                                </a>
                                <div id="navDropDown" className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Account</a>
                                <a className="dropdown-item" href="#">Preferences</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Logout</a>
                                </div>
                            </li> 
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default HeaderComponent