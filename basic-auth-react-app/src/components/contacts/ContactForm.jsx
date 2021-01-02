
import React, { Component } from 'react'

class ContactForm extends Component {
    constructor(props) {
        super(props)

        this.handleClickOnBack = this.handleClickOnBack.bind(this)        
    }

    render() {
        return (
            <div className="card text-left">
                <div className="card-header bg-transparent">
                    <h4>Contacts</h4>
                    <p className="text-left">Contacts {">"} Add</p>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label for="inputNickName4">Nick name</label>
                                <input type="text" className="form-control" id="inputNickName4" placeholder="Nick name" />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputFirstname4">First name</label>
                                <input type="text" className="form-control" id="inputFirstname4" placeholder="First name" />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputLastname4">Last name</label>
                                <input type="text" className="form-control" id="inputLastname4" placeholder="Last name" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="form-group">
                            <label for="inputAddress2">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" className="form-control" id="inputZip" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label for="inputMobile">Mobile #</label>
                                <input type="text" className="form-control" id="inputMobile" />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputHome">Home #</label>
                                <input type="text" className="form-control" id="inputHome" />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputWork">Work #</label>
                                <input type="text" className="form-control" id="inputWork" />
                            </div>
                        </div>                        
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label for="inputRelationship">Relationship</label>
                                <select id="inputRelationship" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>Parents</option>
                                    <option>Spouse</option>
                                    <option>Brother</option>
                                    <option>Sister</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputGroups">Groups</label>
                                <select id="inputGroups" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>Family</option>
                                    <option>Coworkers</option>
                                    <option>Friends</option>
                                </select>
                            </div>     
                            <div className="form-group col-md-4">
                                <label for="inputWorkinfo">Work info</label>
                                <input type="text" className="form-control" id="inputWorkinfo" />
                            </div>                                                     
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button> &nbsp;
                        <button type="submit" className="btn btn-primary">Reset</button> &nbsp;
                        <button type="submit" className="btn btn-primary" onClick={this.handleClickOnBack}>Back</button>
                    </form>
                </div>                
            </div>
        )
    }

    handleClickOnBack () {
        this.props.history.push ("/contacts")
    }
}

export default ContactForm