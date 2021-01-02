
import React, { Component } from 'react'


class ContactList extends Component {
    constructor(props) {
        super(props)

        this.handleClickOfAddContact = this.handleClickOfAddContact.bind(this)
    }

    render() {
        return (
            <div className="card text-left">
                <div className="card-header bg-transparent">
                    <h4>Contacts</h4>
                    <p className="text-left">Contacts {">"} List</p>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-2">
                                <label for="inputName4">Name</label>
                                <input type="text" className="form-control" id="inputName4" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-2">
                                <label for="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-2">
                                <label for="inputMobile">Mobile #</label>
                                <input type="text" className="form-control" id="inputMobile" />
                            </div>

                            <div className="form-group col-md-1">
                                <label for="inputMobile2">&nbsp;</label>
                                <button type="button" className="form-control btn btn-primary">Submit</button> &nbsp;
                            </div>
                            <div className="form-group col-md-1">
                                <label for="inputMobile2">&nbsp;</label>
                                <button type="reset" className="form-control btn btn-primary">Reset</button> &nbsp;
                            </div>
                            <div className="form-group col-md-1 ml-auto ">
                                <label for="inputMobile2">&nbsp;</label>
                                <button type="button" className="btn btn-primary text-nowrap" onClick={this.handleClickOfAddContact}>Add Contact</button>
                            </div>
                        </div>
                    </form>

                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">Nick name</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile #</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>                                
                                <td>Mark</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Otto@gmail.com</td>
                                <td>+91-44-12121123232</td>                                
                            </tr>
                            <tr>
                                <td>Mark</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Otto@gmail.com</td>
                                <td>+91-44-12121123232</td>                              
                            </tr>
                            <tr>
                                <td>Mark</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Otto@gmail.com</td>
                                <td>+91-44-12121123232</td>                              
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    handleClickOfAddContact() {
        this.props.history.push("/contacts/add")
    }

}

export default ContactList