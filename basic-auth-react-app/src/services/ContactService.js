import api from "./_api.js"

class ContactService {
    getContacts (userId) {
        return api.get (`contacts/${userId}`, {})
    }
}

export default new ContactService()