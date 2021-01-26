
import React, { Component } from 'react'

import CountryComponent from '../country/CountryComponent.jsx'
import StateComponent from '../state/StateComponent.jsx'

import ContactModel from '../../models/ContactModel'

import CountryService from '../country/CountryService'

class ContactForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contact : ContactModel,
            countryList : []
        }      

        this.handleOnChange = this.handleOnChange.bind (this)
    }
    componentDidMount () {
        this.getCountries ()
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
                                </select> 

                                <CountryComponent componentName="countryId" selectedCountry="this.state.contact.countryId" onChangeMethod={this.handleOnChange} countryList={this.state.countryList}/> */ }

                                <label for="inputCountry">Country</label>
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
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                {/* <label for="inputState">State</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select> */}

                                <StateComponent countryId={this.state.contact.countryId}/>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputCity">City</label>
                                <input type="text" className="form-control" id="inputCity" placeholder="City Name" name="city" value={this.state.contact.city} onChange={this.handleOnChange}/>
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

    getCountries = () => {
        CountryService.getCountries ()
            .then ((response) => {
                this.setState ({
                    countryList:response.data
                })                    
            })
            .catch ((error) => {

            })
    }
}

export default ContactForm