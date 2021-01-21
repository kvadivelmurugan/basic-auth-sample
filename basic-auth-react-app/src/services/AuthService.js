import axios from "axios"

class AuthService {
    doBasicAuth (username, password) {
        console.log (username + " " + password)


        let authHeader = 'Basic ' + window.btoa(username + ":" + password);

        return axios.post ('http://localhost:8080/auth/basic?userName='+username, 
            { }, 
            {
                headers: {
                    authorization: authHeader
                    //'Access-Control-Allow-Origin': 'http://localhost:3000',
                    //'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                }
            })
    }

    registerLogin (userName, userId) {
        sessionStorage.setItem('userName', userName)
        sessionStorage.setItem('userId', userId)
    }

    UnregisterLogin (userName) {
        sessionStorage.removeItem('userName')
    } 

    isAuthenticated () {
        let userName = sessionStorage.getItem ('userName')
        console.log (userName)
        if (userName) {
            return true
        }

        return false
    }
}

export default new AuthService()