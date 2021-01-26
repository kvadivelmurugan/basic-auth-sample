import React, {Component} from 'react'
import StateService from './StateService'

class StateComponent extends Component {
    constructor (props) {
        super (props)

        this.state = {
            stateList : []
        }
    }

    componentDidMount () {
        let countryId = this.props.countryId;

        if (countryId) {
            this.getStatesByCountry (countryId)
        }
    }

    render () {
        return (
            <>
                <label for="inputState">State</label>
                <select id="inputState" className="form-control">
                    <option key="0" value="0">Choose a State...</option>
                    {                            
                        this.state.stateList.map ((state) => {
                            return (
                                <option key={state.stateId} value={state.stateName}>{state.stateName}</option>
                            )
                        })
                    }
                </select>
            </>
        )
    }

    getStatesByCountry = (countryId) => {
        StateService.getStatesByCountry (countryId)
            .then ((response) => {
                this.setState ({
                    stateList:response.data
                })                    
            })
            .catch ((error) => {

            })
    }
}
 
export default StateComponent