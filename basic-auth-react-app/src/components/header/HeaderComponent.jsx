/**
 * This is the HeaderComponent
 * 
 * 
 * Developed by vini technology solutions
 */
import React, { Component } from 'react'
import {withRouter} from 'react-router'
import AuthService from '../../services/AuthService'
import './HeaderComponent.css'

class HeaderComponent extends Component {
    constructor (props) {
        super (props)
    }

    onClickLogout = this.onClickLogout.bind(this)

    render () {
        const isUserAuthenticated = AuthService.isUserAuthenticated()
        console.log (' isUserAuthenticated :: ' + AuthService.isUserAuthenticated())
        return (
            <>
                <nav id="navMain" className="navbar navbar-expand-lg navbar-dark bg-faded">
                    <a className="navbar-brand" href="/home"><img src="/images/logo.jpg" height="20" width="20"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {isUserAuthenticated && <li className="nav-item active">
                                <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                            </li>}
                            {isUserAuthenticated && <li className="nav-item">
                                <a className="nav-link" href="/contacts">Contacts</a>
                            </li>}
                            {isUserAuthenticated && <li className="nav-item">
                                <a className="nav-link" href="/expenses">Expenses</a>
                            </li>}
                            {isUserAuthenticated && <li className="nav-item">
                                <a className="nav-link" href="/events">Events</a>
                            </li>}                        
                            {isUserAuthenticated && <li className="nav-item">
                                <a className="nav-link" href="/notes">Notes</a>
                            </li>}                                              
                        </ul>
                        {isUserAuthenticated && <ul className="nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Profile
                                </a>
                                <div id="navDropDown" className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Account</a>
                                <a className="dropdown-item" href="#">Preferences</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#" onClick = {this.onClickLogout}>Logout</a>
                                </div>
                            </li> 
                        </ul>}
                    </div>
                </nav>
            </>
        )
    }

    onClickLogout () {
        AuthService.UnregisterLogin();
        this.props.history.push ('/login')
    }
}

export default withRouter(HeaderComponent)