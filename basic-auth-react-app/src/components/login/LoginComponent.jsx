import React, { Component } from 'react'


class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.handleClickOfLogin = this.handleClickOfLogin.bind(this)
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
                                <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                            </div>
                        
                        
                            <div className="form-group">
                                <label for="inputPassword">Email</label>
                                <input type="Password" className="form-control" id="inputPassword" placeholder="Password" />
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
}

export default LoginComponent