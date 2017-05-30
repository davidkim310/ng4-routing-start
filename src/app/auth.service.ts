export class AuthService {
    loggedIn = false;
//check the state of authentication
    isAuthenticated() {
        //settimeout bc it may take some time "fake time"
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(()=>{
                    resolve(this.loggedIn)
                }, 800);
            }
        );
        return promise;
    }

    login() {
        this.loggedIn = true;
    }
    logoff() {
        this.loggedIn = false;
    }
}