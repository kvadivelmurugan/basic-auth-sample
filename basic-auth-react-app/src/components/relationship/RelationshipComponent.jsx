import React, {Component} from 'react'
import RelationshipService from './RelationshipService'

class RelationshipComponent extends Component {
    constructor (props) {
        super (props)

        this.state = {
            relationshipList : []
        }
    }

    componentDidMount () {
        this.getRelatioships()
    }

    render () {
        return (
            <>
                <label for="inputRelationship">Relationship</label>
                <select id="inputRelationship" className="form-control" name={this.props.componentName} value={this.props.selectedRelationship} onChange={this.props.onChangeMethod}>
                    <option key="0" value="0">Choose a Relationship...</option>
                    {                            
                        this.state.relationshipList.map ((relationship) => {
                            return (
                                <option key={relationship.relationshipId} value={relationship.relationshipId}>{relationship.relationshipName}</option>
                            )
                        })
                    }
                </select>               
            </>
        )
    }

    getRelatioships = () => {
        RelationshipService.getRelationships ()
        .then ((response) => {
            this.setState ({
                relationshipList:response.data
            })                    
        })
        .catch ((error) => {

        })
    }
}

export default RelationshipComponent