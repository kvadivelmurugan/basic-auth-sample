import AuthService from '../services/AuthService'
import GroupModel from './GroupModel'
import RelationshipModel from './RelationshipModel'
import CountryModel from './CountryModel'
import StateModel from './StateModel'


const ContactModel = {
    contactId : '', 
	nickName : '', 
	firstName : '', 
	lastName : '', 
	personalEmail : '',
	workEmail : '',
	primaryAddress : '',
	secondaryAddress : '',
	city : '',
	state : StateModel,
	country : CountryModel,
	zip : '',
	mobile : '',
	homePhone : '',
	workPhone : '',
	relationship : RelationshipModel,
	group : GroupModel,	
	status : '',
	userId : AuthService.getLoggedInUserId()
}

export default ContactModel