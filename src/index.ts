import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { prismaClient } from "./lib/db";

async function init() {
  const app = express();
  app.use(express.json());

  const PORT = Number(process.env.PORT) || 3000;

  const server = new ApolloServer({
    typeDefs: `
       type Query {
         hello: String!
      }
      type Mutation {
        createUser(firstName: String!, lastName: String!, email: String!, password: String!):Boolean
      }   

    `, // Schema
    resolvers: {
      Query: {
        hello: () => "Hello World!",
      },

      Mutation: {
        createUser: async (
          _,
          {
            firstName,
            lastName,
            email,
            password,
            Salt,
          }: {
            firstName: string;
            lastName: string;
            email: string;
            password: string;
            Salt: string;
          }
        ) => {
            await prismaClient.user.create({
               data: {
                  firstName,
                  lastName,
                  email,
                  password,
                  Salt: "1234",
               }
            })
            return true;
        },
      },
    }, // Resolvers
  });

  await server.start();

  app.get("/", (req, res) => {
    res.json({ message: "Server is up and Running LOL!" });
  });

  app.use("/graphql", expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

init();
