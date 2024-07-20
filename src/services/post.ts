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


