import { prismaClient } from "../lib/db";

export interface CreatePostPayload {
  title: string;
  content: string;
}



class PostServices {
  public static async createPost(payload: CreatePostPayload, context:any) {
    const { title, content } = payload;
    console.log(context, 'contextsercvices');
    
    return prismaClient.post.create({
      data: {
        title,
        content,
        authorId: context.user.id,
      },
    });
  }

  public static async getPosts() {
    return prismaClient.post.findMany();
  }
}


export default PostServices;


// id : c91ddee9-d967-411c-9c03-1123655c1cea
//  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM5MWRkZWU5LWQ5NjctNDExYy05YzAzLTExMjM2NTVjMWNlYSIsImVtYWlsIjoiYXplZW1AZ21haWwuY29tIiwiaWF0IjoxNzIxNTA1MjAxfQ.f-rxgf4VKpXrubQ58Qqzhz9QfHWiTGr_b87K8bAhO_k
// {  "email": "azeem@gmail.com",
//     "password": "123456"
//   }