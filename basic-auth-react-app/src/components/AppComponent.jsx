/**
 * This is the app root component of this application
 * 
 * 
 * Developed by vini technology solutions
 */
import React, { Component } from 'react'
import HeaderComponent from './header/HeaderComponent.jsx'
import HomeComponent from './home/HomeComponent.jsx'
import ContactForm from './contacts/ContactForm.jsx'
import ContactList from './contacts/ContactList.jsx'

class AppComponent extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <div >
                <HeaderComponent />
                <HomeComponent />
                <ContactForm />
                <ContactList />
            </div>
        )
    }

}

export default AppComponent