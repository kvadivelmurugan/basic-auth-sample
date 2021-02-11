/**
 * This is the HeaderComponent
 * 
 * 
 * Developed by vini technology solutions
 */
import React, { Component } from 'react'
import {withRouter} from 'react-router'
import './HeaderComponent.css'

class HeaderComponent extends Component {
    constructor (props) {
        super (props)
    }

    componentDidMount () {
    }

    componentWillUnmount() {
    }

    render () {
        return (
            <>
                <nav id="navMain" className="navbar navbar-expand-lg navbar-dark bg-faded">
                    <a className="navbar-brand" href="/"><img src="/images/logo.jpg" height="20" width="20"/></a>
                </nav>
            </>
        )
    }
}

export default withRouter(HeaderComponent)