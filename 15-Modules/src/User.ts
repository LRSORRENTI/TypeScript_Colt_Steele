
// So if the class below is the only thing 
// in the file or the only  main thing we want 
// export, we do export default

import { Person } from "./types"

export default class User implements Person{ 
    constructor(public username: string, 
        public email: string){
        }
     logout(){
     console.log(`${this.username} logged out `)
     }
    }

    export function userHelper(){
        console.log("user helper")
    }

