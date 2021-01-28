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
        console.log ('state ...')
        let countryId = this.props.countryId;

        if (countryId) {
            this.getStatesByCountry (countryId)
        }
    }

    componentWillReceiveProps (props) {
        console.log ('componentWillReceiveProps....')
        const {selectedCountry} = this.props

        console.log ('props param ' + props)

        console.log ('this.props ' + this.props)
        console.log ('props.selectedCountry ' + props.selectedCountry)
        console.log ('this.props.selectedCountry ' + this.props.selectedCountry)
        if (props.selectedCountry !== selectedCountry) {
            this.getStatesByCountry (props.selectedCountry)
        }

    }

    render () {        
        return (
            <>                
                <label for="inputState">State</label>
                <select id="inputState" className="form-control" name={this.props.componentName} value={this.props.selectedState} onChange={this.props.onChangeMethod}>
                    <option key="0" value="0">Choose a State...</option>
                    {                            
                        this.state.stateList.map ((state) => {
                            return (
                                <option key={state.stateId} value={state.stateId}>{state.stateName}</option>
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