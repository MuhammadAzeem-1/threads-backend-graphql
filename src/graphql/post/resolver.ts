import PostServices, { CreatePostPayload } from "../../services/post";

const queries = {
    getPosts: async (_:any, parameter:any) => {
         const res = await PostServices.getPosts();
        return res;
    }
};

const mutation = {
    createPost: async (_:any, payload:CreatePostPayload, context:any ) => {
        const res = await PostServices.createPost(payload, context);
        
        return "Post created successfully";
    }
};    

export const resolvers = {queries, mutation};