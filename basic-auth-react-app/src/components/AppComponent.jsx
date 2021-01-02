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
import ExpenseForm from './expenses/ExpenseForm.jsx'
import ExpenseList from './expenses/ExpenseList.jsx'
import EventForm from './events/EventForm.jsx'
import EventList from './events/EventList.jsx'
import NoteForm from './notes/NoteForm.jsx'
import NoteList from './notes/NoteList.jsx'

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
                            <Route path="/expenses" exact component={ExpenseList} />                        
                            <Route path="/expenses/add" component={ExpenseForm} />                            
                            <Route path="/events" exact component={EventList} />                        
                            <Route path="/events/add" component={EventForm} />    
                            <Route path="/notes" exact component={NoteList} />                        
                            <Route path="/notes/add" component={NoteForm} />                            
                        </Switch>
                    </>
                </Router>
            </div>
        )
    }

}

export default AppComponent