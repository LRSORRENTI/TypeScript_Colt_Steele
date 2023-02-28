// So if the class below is the only thing 
// in the file or the only  main thing we want 
// export, we do export default
export default class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} logged out `);
    }
}
export function userHelper() {
    console.log("user helper");
}
