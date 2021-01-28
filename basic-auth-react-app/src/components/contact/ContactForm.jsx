
import React, { Component } from 'react'

import CountryComponent from '../country/CountryComponent.jsx'
import StateComponent from '../state/StateComponent.jsx'
import RelationshipComponent from '../relationship/RelationshipComponent.jsx'
import GroupComponent from '../group/GroupComponent.jsx'

import ContactModel from '../../models/ContactModel'

import AuthService from '../../services/AuthService'

class ContactForm extends Component {
    constructor(props) {
        console.log ('getLoggedInUserId ' + AuthService.getLoggedInUserId())
        super(props)

        this.state = {
            contact : ContactModel            
        }      

        this.handleOnChange = this.handleOnChange.bind (this)
    }

    componentDidMount () {

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
                                <input type="hidden" className="form-control" id="inputUserId" placeholder="userId" name="userId" value={this.state.contact.nickName}/>
                                <input type="text" className="form-control" id="inputNickName4" placeholder="Nick name" name="nickName" value={this.state.contact.nickName} onChange={this.handleOnChange}/>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputFirstname4">First name</label>
                                <input type="text" className="form-control" id="inputFirstname4" placeholder="First name" name="firstName" value={this.state.contact.firstName} onChange={this.handleOnChange}/>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputLastname4">Last name</label>
                                <input type="text" className="form-control" id="inputLastname4" placeholder="Last name" name="lastName" value={this.state.contact.lastName} onChange={this.handleOnChange}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputPersonalEmail4">Personal Email</label>
                                <input type="email" className="form-control" id="inputPersonalEmail4" placeholder="Primary Email" name="personalEmail" value={this.state.contact.personalEmail} onChange={this.handleOnChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputWorkEmail4">Office Email</label>
                                <input type="email" className="form-control" id="inputWorkEmail4" placeholder="Secondary Email" name="workEmail" value={this.state.contact.workEmail} onChange={this.handleOnChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress">Door# / Block# / Apartment Name</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Door# / Block# / Apartment Name" name="primaryAddress" value={this.state.contact.primaryAddress} onChange={this.handleOnChange}/>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress2">Street Name / Area Name</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Street Name / Area Name" name="secondaryAddress" value={this.state.contact.secondaryAddress} onChange={this.handleOnChange}/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                {/* <label for="inputState">State</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select> */ }

                                <CountryComponent componentName="countryId" selectedCountry={this.state.contact.country.countryId} onChangeMethod={this.handleCountryOnChange} /> 

                                {/* <label for="inputCountry">Country</label>
                                <select id="inputCountry" className="form-control" name="countryId" 
                                    value={this.state.contact.countryId}
                                    onChange={this.handleOnChange}>
                                    <option key="0" value="0">Choose a Country...</option>
                                    {                            
                                        this.state.countryList.map ((country) => {
                                            return (
                                                <option key={country.countryId} value={country.countryId}>{country.countryName}</option>
                                            )
                                        })
                                    }
                                </select> */}
                            </div>
                            <div className="form-group col-md-3">
                                {/* <label for="inputState">State</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select> */}

                                <StateComponent componentName="state.stateId" selectedCountry={this.state.contact.country.countryId}  selectedState={this.state.contact.state.stateId} onChangeMethod={this.handleOnChange}/>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputCity">City</label>
                                <input type="text" className="form-control" id="inputCity" placeholder="City Name" name="city" value={this.state.contact.city} onChange={this.handleOnChange}/>
                            </div>
                            
                            <div className="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" className="form-control" id="inputZip" name="zip" value={this.state.contact.zip} onChange={this.handleOnChange}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-2">
                                <label for="inputMobile">Mobile #</label>
                                <input type="text" className="form-control" id="inputMobile" name="mobile" value={this.state.contact.mobile} onChange={this.handleOnChange}/>
                            </div>
                            <div className="form-group col-md-2">
                                <label for="inputHome">Home #</label>
                                <input type="text" className="form-control" id="inputHome" name="homePhone" value={this.state.contact.homePhone} onChange={this.handleOnChange}/>
                            </div>
                            <div className="form-group col-md-2">
                                <label for="inputWork">Work #</label>
                                <input type="text" className="form-control" id="inputWork" name="workPhone" value={this.state.contact.workPhone} onChange={this.handleOnChange}/>                                
                            </div>
                            <div className="form-group col-md-3">
                                <RelationshipComponent componentName="relationship.relationshipId" selectedRelationship={this.state.contact.relationship.relationshipId} onChangeMethod={this.handleOnChange} /> 
                            </div>
                            <div className="form-group col-md-3">
                                <GroupComponent componentName="group.groupId" selectedGroup={this.state.contact.group.groupId} onChangeMethod={this.handleOnChange} /> 
                            </div>                                                       

                        </div>                        
                        <div className="form-row">
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button> &nbsp;
                        <button type="submit" className="btn btn-primary">Reset</button> &nbsp;
                        <button type="button" className="btn btn-primary" onClick={this.handleClickOnBack}>Back</button>
                    </form>
                </div>                
            </div>
        )
    }

    handleClickOnBack = () => {
        //this.props.history.push ("/contacts")
        console.log (this.state.contact)    
    }

    handleOnChange (event) {
        console.log ('object ' + event.target.name)
        console.log ('value ' + event.target.value)
        this.setState ({
            contact: { ...this.state.contact, [event.target.name]: event.target.value }
        })
        console.log ('country ' + this.state.contact.countryId)
    }

    handleCountryOnChange = (event) => {
        console.log ('object ' + event.target.name)
        console.log ('value ' + event.target.value)

        let country = this.state.contact.country

        country.countryId = event.target.value

        this.setState ({
            contact: { ...this.state.contact, country: country }
        })
        console.log ('country ' + this.state.contact.countryId)
    }
}

export default ContactForm