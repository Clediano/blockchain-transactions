class AuthenticationUsers {

    create(email, password) {
        return new Promise((resolve, reject) => {
            resolve({ email, password })
        })
    }

    authenticate(email, password) {
        return new Promise((resolve, reject) => {
            resolve({ email, password })
        })
    }

    

}

module.exports = new AuthenticationUsers();
