/**
 * This is the app root component of this application
 * 
 * 
 * Developed by vini technology solutions
 */
import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HeaderComponent from './header/HeaderComponent.jsx'
import LoginComponent from './login/LoginComponent.jsx'
import HomeComponent from './home/HomeComponent.jsx'
import ContactForm from './contacts/ContactForm.jsx'
import ContactList from './contacts/ContactList.jsx'



class AppComponent extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <div className="container-fluid">
                
                <HeaderComponent />
                <Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}  />                    
                            <Route path="/login" component={LoginComponent}  />                    
                            <Route path="/home" component={HomeComponent}  />                    
                            <Route path="/contacts" exact component={ContactList} />                        
                            <Route path="/contacts/add" component={ContactForm} />                            
                        </Switch>
                    </>
                </Router>
            </div>
        )
    }

}

export default AppComponent