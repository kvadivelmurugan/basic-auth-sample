/**
 * This is the app root component of this application
 * 
 * 
 * Developed by vini technology solutions
 */
import React, { Component } from 'react'
import HeaderComponent from './header/HeaderComponent.jsx'
import HomeComponent from './home/HomeComponent.jsx'


class AppComponent extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <div >
                <HeaderComponent/>
                <HomeComponent />
            </div>
        )
    }

}

export default AppComponent