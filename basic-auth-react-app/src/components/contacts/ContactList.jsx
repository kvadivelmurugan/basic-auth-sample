
import React, { Component } from 'react'


class ContactList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
            <div className="row border-bottom border-info my-3">               
                <div className="col-md-6">
                    <h4>Contacts</h4>
                </div>
                <div className="col-md-6 ">
                    <h4><button type="submit" class="btn btn-primary text-right">Add Contact</button></h4>
                </div>                
            </div>
            
               
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputName">Name</label>
                            <input type="text" class="form-control" id="inputName" placeholder="Name" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputMobile">Mobile</label>
                            <input type="text" class="form-control" id="inputMobile" placeholder="Mobile #" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputLastname4">Password</label>
                            <button type="submit" class="btn btn-primary">Search</button> &nbsp;
                            </div>
                    </div>
                </form>
            </>
        )
    }

}

export default ContactList