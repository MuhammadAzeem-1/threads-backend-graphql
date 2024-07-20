import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import createApolloGraphqlServer from "./graphql";
import UserService from "./services/user";

async function init() {
  const app = express();
  app.use(express.json());

  const PORT = Number(process.env.PORT) || 3000;

  app.use(
    "/graphql",
    expressMiddleware(await createApolloGraphqlServer(), {
      context: async ({ req }) => {
        const token = req.headers["token"];
        
        try {
          const user = UserService.decodeJWTToken(token as string);
          
          
          return { user };
        } catch (error) {
         
          
          return {};
        }
      },
    })
  );

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

init();

// commands

// npm install
// typescript build: tsc 
// for-> docker : docker compose up -d
// for-> local : npm run dev
