import { ApolloServer } from "@apollo/server";
import { User } from "./user";
import { Post } from "./post";

async function createApolloGraphqlServer() {
  const gqlserver = new ApolloServer({
    typeDefs: ` 
     ${User.typeDefs},
     ${Post.typeDefs}
      type Query {
        ${User.queries},
        ${Post.queries}
      }
      type Mutation {
        ${User.mutation},
        ${Post.mutation}
      }    
    `, // schema
    
    resolvers: {
      Query: {
        ...User.resolvers.queries,
        ...Post.resolvers.queries,
      },

      Mutation: {
        ...User.resolvers.mutation,
        ...Post.resolvers.mutation,
      },
    },
  });

  await gqlserver.start();

  return gqlserver;
}

export default createApolloGraphqlServer;

