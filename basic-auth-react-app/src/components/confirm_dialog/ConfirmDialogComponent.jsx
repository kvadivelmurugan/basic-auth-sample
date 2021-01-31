import React, { Component } from 'react'

class ConfirmDialogComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                Confirm
                            </div>    
                            <div content="modal-body">
                                Do you want to save
                            </div>
                            <div content="modal-footer">
                                <input type="button" value = "Yes" onClick={this.props.handlerOnClick} />
                                <input type="button" value = "No" onClick={this.props.handlerOnClick} />
                            </div>                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ConfirmDialogComponent