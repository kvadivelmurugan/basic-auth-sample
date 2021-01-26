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
import ContactForm from './contact/ContactForm.jsx'
import ContactList from './contact/ContactList.jsx'
import ExpenseForm from './expense/ExpenseForm.jsx'
import ExpenseList from './expense/ExpenseList.jsx'
import EventForm from './event/EventForm.jsx'
import EventList from './event/EventList.jsx'
import NoteForm from './notes/NoteForm.jsx'
import NoteList from './notes/NoteList.jsx'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'

class AppComponent extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <div className="container-fluid">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent}  />                    
                            <Route path="/login" component={LoginComponent}  />                    
                            <AuthenticatedRoute path="/home" component={HomeComponent}  />                    
                            <Route path="/contacts" exact component={ContactList} />                        
                            <Route path="/contacts/add" component={ContactForm} />                            
                            <AuthenticatedRoute path="/expenses" exact component={ExpenseList} />                        
                            <AuthenticatedRoute path="/expenses/add" component={ExpenseForm} />                            
                            <AuthenticatedRoute path="/events" exact component={EventList} />                        
                            <AuthenticatedRoute path="/events/add" component={EventForm} />    
                            <AuthenticatedRoute path="/notes" exact component={NoteList} />                        
                            <AuthenticatedRoute path="/notes/add" component={NoteForm} />                            
                        </Switch>
                    </>
                </Router>
            </div>
        )
    }

}

export default AppComponent