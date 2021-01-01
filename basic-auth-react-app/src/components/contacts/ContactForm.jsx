
import React, { Component } from 'react'

class ContactForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card text-left">
                <div className="card-header bg-transparent">
                    <h4>Contacts</h4>
                </div>
                <div className="card-body">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputNickName4">Nick name</label>
                                <input type="text" class="form-control" id="inputNickName4" placeholder="Nick name" />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputFirstname4">Password</label>
                                <input type="text" class="form-control" id="inputFirstname4" placeholder="First name" />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputLastname4">Password</label>
                                <input type="text" class="form-control" id="inputLastname4" placeholder="Last name" />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div class="form-group">
                            <label for="inputAddress2">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" class="form-control" id="inputCity" />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" class="form-control" id="inputZip" />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputMobile">Mobile #</label>
                                <input type="text" class="form-control" id="inputMobile" />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputHome">Home #</label>
                                <input type="text" class="form-control" id="inputHome" />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputWork">Work #</label>
                                <input type="text" class="form-control" id="inputWork" />
                            </div>
                        </div>                        
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputRelationship">Relationship</label>
                                <select id="inputRelationship" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>Parents</option>
                                    <option>Spouse</option>
                                    <option>Brother</option>
                                    <option>Sister</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputGroups">Groups</label>
                                <select id="inputGroups" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>Family</option>
                                    <option>Coworkers</option>
                                    <option>Friends</option>
                                </select>
                            </div>     
                            <div class="form-group col-md-4">
                                <label for="inputWorkinfo">Work info</label>
                                <input type="text" class="form-control" id="inputWorkinfo" />
                            </div>                                                     
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button> &nbsp;
                        <button type="submit" class="btn btn-primary">Reset</button>
                    </form>
                </div>                
            </div>
        )
    }

}

export default ContactForm