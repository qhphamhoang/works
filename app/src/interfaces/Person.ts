 export type Person = {
    fullName:string;
    firstName:string;
    lastName:string;
    middleName:string;
    age:number;
    birthday:string;
    phone:string;
    email:string;
 }

 /**
 * PersonInfo
 */
export class PersonInfo {
    

    constructor(private person:Person) {
        
    }
} 