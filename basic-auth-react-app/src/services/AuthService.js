import axios from "axios"

class AuthService {
    doBasicAuth (username, password) {
        console.log (username + " " + password)


        let authHeader = 'Basic ' + window.btoa(username + ":" + password);

        return axios.post ('http://localhost:8080/auth/basic', {}, {
            headers: {
                authorization: authHeader
                //'Access-Control-Allow-Origin': 'http://localhost:3000',
                //'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        })
         
    }

    registerLogin (username) {
        sessionStorage.setItem('username', username)
    }

    UnregisterLogin (username) {
        sessionStorage.removeItem('username')
    } 

    isAuthenticated () {
        let username = sessionStorage.getItem ('username')
        console.log (username)
        if (username) {
            return true
        }

        return false
    }
}

export default new AuthService()