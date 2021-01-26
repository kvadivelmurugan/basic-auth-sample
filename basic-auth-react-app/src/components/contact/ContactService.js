import api from "../../services/_api"

class ContactService {
    getContacts (userId) {
        return api.get (`contacts/${userId}`)
    }
}

export default new ContactService()