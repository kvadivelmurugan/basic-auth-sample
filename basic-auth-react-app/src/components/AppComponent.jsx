/**
 * This is the app root component of this application
 * 
 * 
 * Developed by vini technology solutions
 */
import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { UserContext } from '../contexts/UserContext.js'

import Header2Component from './header/Header2Component.jsx'
import LoginComponent from './login/LoginComponent.jsx'
import HomeComponent from './home/HomeComponent.jsx'
import ContactForm from './contact/ContactForm.jsx'
import ContactList from './contact/ContactList.jsx'
import ContactConfirm from './contact/ContactConfirm.jsx'
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

        this.state = {
            isAuthenticated : false,
            loggedInUserId: '',
            loggedInUserName: '', 
            roles: [],
        }
    }

    componentDidMount () {
        console.log ('App Component mounted...')
        console.log ('loggedInUserName ' + this.state.loggedInUserName)
        this.initialize ()
    }

    initialize = () => {
        let isAuthenticated = sessionStorage.getItem ('isAuthenticated') 
        if (isAuthenticated) {
            let user = JSON.parse (sessionStorage.getItem ('user'))
            this.init (isAuthenticated, user)
        }
    }

    render () {
        return (
            <UserContext.Provider value= {{isAuthenticated: this.state.isAuthenticated, loggedInUserId: this.state.loggedInUserId, loggedInUserName: this.state.loggedInUserName, roles: this.state.roles, registerLogin : this.registerLogin}}>
                <div className="container-fluid">
                    
                    <Router>
                        <>
                            <Header2Component />
                            
                            <Switch>
                                <Route path="/" exact component={LoginComponent}  />                    
                                <Route path="/login" component={LoginComponent} />                    
                                <AuthenticatedRoute path="/home" component={HomeComponent}  />                    
                                <AuthenticatedRoute path="/contacts" exact component={ContactList} />                        
                                <AuthenticatedRoute path="/contacts/add" component={ContactForm} />     
                                <AuthenticatedRoute path="/contacts/confirm" component={ContactConfirm} />                        
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
            </UserContext.Provider>
        )
    }

    registerLogin = (isAuthenticated, user) => {
        console.log (' App registerLogin ' + isAuthenticated + ' : ' + user.userId)
        this.init (isAuthenticated, user)
    }

    init = (isAuthenticated, user) => {
        console.log (' init called....' + isAuthenticated + ':' + user)
        this.setState ({
            isAuthenticated : isAuthenticated,
            loggedInUserId: user.userId,
            loggedInUserName: user.userName, 
            roles: user.roleList
        })
    }
}

export default AppComponent