import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

async function init() {

  const app = express();
  app.use(express.json());

  const PORT = Number(process.env.PORT) || 3000;

  const server = new ApolloServer({
    typeDefs: `
       type Query {
         hello: String!
      }
    `,// Schema
    resolvers: {
      Query: {
        hello: () => "Hello World!",
      },
    },// Resolvers
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
