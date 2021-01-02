import React, { Component } from 'react'


class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.handleClickOfLogin = this.handleClickOfLogin.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)

        this.state = {
            email: '',
            password: ''
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
        this.props.history.push ("/home")
    }

    handleOnChange (event) {
        this.setState ({
            [event.target.name] : event.target.value
        })
    }
}

export default LoginComponent