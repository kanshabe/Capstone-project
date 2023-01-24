import { Role } from "./role";

export default class User {
    firstName?: string;
    lastName?: string;
    email?: string;
    username?: string;
    password?: string;
    token?: string;
    role?: Role;
    id?:number;

}
