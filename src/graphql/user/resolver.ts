import { prismaClient } from "../../lib/db";
import UserService, { CreateUserPayload, GetUserTokenPayload } from "../../services/user";


const queries = {
    getUserToken: async (_:any, payload: {email: string, password:string}) => {
        const token = await UserService.getUserToken({
            email: payload.email,
            password: payload.password
        });
        return token;
    },

    getCurrentLoggedInUser: async (_:any, parameter:any, context:any) => {
       if(context && context.user){
         const id =  context.user.if;
        const user = await UserService.getUserById(id);
        return user;
        
        
       }
       throw new Error("User not found");
    }
}

const mutation = {
    createUser: async (_:any, payload:CreateUserPayload) => {
        const res = await UserService.createUser(payload);
        return res.id;
    }
}
            
            


export const resolvers = {queries, mutation};