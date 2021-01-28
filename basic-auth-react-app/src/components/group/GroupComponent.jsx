import React, {Component} from 'react'
import GroupService from './GroupService'

class GroupComponent extends Component {
    constructor (props) {
        super (props)

        this.state = {
            GroupList : []
        }
    }

    componentDidMount () {
        this.getGroups()
    }

    render () {
        return (
            <>
                <label for="inputGroup">Group</label>
                <select id="inputGroup" className="form-control" name={this.props.componentName} value={this.props.selectedGroup} onChange={this.props.onChangeMethod}>
                    <option key="0" value="0">Choose a Group...</option>
                    {                            
                        this.state.GroupList.map ((Group) => {
                            return (
                                <option key={Group.groupId} value={Group.groupId}>{Group.groupName}</option>
                            )
                        })
                    }
                </select>               
            </>
        )
    }

    getGroups = () => {
        GroupService.getGroups ()
        .then ((response) => {
            this.setState ({
                GroupList:response.data
            })                    
        })
        .catch ((error) => {

        })
    }
}

export default GroupComponent