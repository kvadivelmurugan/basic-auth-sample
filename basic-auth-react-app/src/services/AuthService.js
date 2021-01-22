import axios from "axios"

import api from "./_api.js"

class AuthService {
    doBasicAuth (userName, password) {
        console.log (userName + " " + password)

        let authHeader = this.getAuthHeader (userName, password)

        return api.post ('auth/basic?userName='+userName, 
            { }, 
            {
                headers: {
                    authorization: authHeader
                    //'Access-Control-Allow-Origin': 'http://localhost:3000',
                    //'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                }
            })
    }

    registerLogin (userName, password, userId) {
        console.log ('registerLogin called...')
        sessionStorage.setItem('userName', userName)
        sessionStorage.setItem('userId', userId)

        let authHeader = this.getAuthHeader(userName, password)
        sessionStorage.setItem('authHeader', authHeader)
        //this.setupAxiosInterceptorForRequest (authHeader)
    }

    setupAxiosInterceptorForRequest (authHeader) {
        console.log ('interceptors called') 
        axios.interceptors.request.use (
            (config) => {
                if (this.isUserAuthenticated ()) {                                       
                    config.headers['authorization'] = authHeader                  
                }
                return config
            }
        )
    }

    UnregisterLogin (userName) {
        sessionStorage.removeItem('userName')
        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('authHeader')
    } 

    getLoggedInUserName() {
        return sessionStorage.getItem ('userName');
    }

    getLoggedInUserId() {
        return sessionStorage.getItem ('userId');
    }

    getAuthHeader (userName, password) {
        return 'Basic ' + window.btoa(userName + ":" + password)
    }

    isUserAuthenticated () {
        let userName = sessionStorage.getItem ('authHeader')
        console.log (userName)
        if (userName) {
            return true
        }
        return false
    }
}

export default new AuthService()