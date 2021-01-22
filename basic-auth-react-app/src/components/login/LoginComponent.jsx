import React, { Component } from 'react'

import ErrorHandlerService from '../../services/ErrorHandlerService.js'
import AuthService from '../../services/AuthService.js'

class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.handleClickOfLogin = this.handleClickOfLogin.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)

        this.state = {
            email: '',
            password: '',
            errorMessage: ''
        }
    }

    render() {
        return (
            <>
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>                    
                </div>

                <div className="card col-4 offset-md-8">
                    <div className="card-header bg-light text-center">
                        <h4>Login</h4>
                        <h6 className="text-danger">{this.state.errorMessage}</h6>
                    </div>
                    <div className="card-body text-left">
                        <form>
                            
                            <div className="form-group">
                                <label for="inputEmail">Email</label>
                                <input type="text" className="form-control" id="inputEmail" placeholder="Email" name="email" value={this.state.email} onChange={this.handleOnChange}/>
                            </div>
                        
                        
                            <div className="form-group">
                                <label for="inputPassword">Password</label>
                                <input type="Password" className="form-control" id="inputPassword" placeholder="Password" name="password" value={this.state.password} onChange={this.handleOnChange}/>
                            </div>
                            
                            
                            <div className="form-group text-center">                                    
                                <button type="button" className="btn btn-primary text-nowrap" onClick={this.handleClickOfLogin}>Login</button> &nbsp;
                                <button type="reset" className="btn btn-primary text-nowrap">Reset</button>
                            </div>
                            
                        </form>                        
                    </div>
                </div>
            </>
        )
    }

    handleClickOfLogin () {
        AuthService.doBasicAuth (this.state.email, this.state.password)
            .then((response) => {
                console.log ('auth success' + response.data.userId)
                AuthService.registerLogin (this.state.email, this.state.password, response.data.userId)
                this.props.history.push ("/home")
            }).catch(
            (error) => {
                this.setState ({
                    errorMessage : ErrorHandlerService.handleError (error) 
                })
            })
    }

    handleOnChange (event) {
        this.setState ({
            [event.target.name] : event.target.value
        })
    }
}

export default LoginComponent