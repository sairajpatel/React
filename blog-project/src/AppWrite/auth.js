import config from "../Config/config";
import {Client,Account,ID} from "appwrite";
export class AuthService{
    client =new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(config.url)
        .setProject(config.projectId);
        this.account=new Account(this.client);
    }
    async createAccount({email,password,name}){
        try{
           const createAccount= await this.account.create(ID.unique(),email,password,name);
           if(createAccount){
            this.login({email,password});
           }
           else{
                throw "Account not created";
           }

        }
        catch(error){
            throw error;
        }
    
    }
    async login({email,password}){
        try{
            return await this.account.createSession(email,password);
        }
        catch(error){
            return "There was error in logging in",error;
        }

    }
    async getUser(){
        try{
            return await this.account.get();
        }
        catch(error){
            return "There was error in getting user",error;
        }
    }
    async logout(){
        try{
            return await this.account.deleteSessions();
        }
        catch(error){
            return "There was error in logging out",error;
        }
    }
}
const authservice=new AuthService();
export default authservice;