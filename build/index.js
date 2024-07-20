"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express4_1 = require("@apollo/server/express4");
const graphql_1 = __importDefault(require("./graphql"));
const user_1 = __importDefault(require("./services/user"));
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        const PORT = Number(process.env.PORT) || 3000;
        app.use("/graphql", (0, express4_1.expressMiddleware)(yield (0, graphql_1.default)(), {
            context: (_a) => __awaiter(this, [_a], void 0, function* ({ req }) {
                const token = req.headers["token"];
                try {
                    const user = user_1.default.decodeJWTToken(token);
                    return { user };
                }
                catch (error) {
                    return {};
                }
            }),
        }));
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    });
}
init();
// import express from "express";
// import { ApolloServer } from "@apollo/server";
// import { expressMiddleware } from "@apollo/server/express4";
// import { prismaClient } from "./lib/db";
// async function init() {
//   const app = express();
//   app.use(express.json());
//   const PORT = Number(process.env.PORT) || 3000;
//   const server = new ApolloServer({
//     typeDefs: `
//        type Query {
//          hello: String!
//       }
//       type Mutation {
//         createUser(firstName: String!, lastName: String!, email: String!, password: String!):Boolean
//       }
//     `, // Schema
//     resolvers: {
//       Query: {
//         hello: () => "Hello World!",
//       },
//       Mutation: {
//         createUser: async (
//           _,
//           {
//             firstName,
//             lastName,
//             email,
//             password,
//             Salt,
//           }: {
//             firstName: string;
//             lastName: string;
//             email: string;
//             password: string;
//             Salt: string;
//           }
//         ) => {
//             await prismaClient.user.create({
//                data: {
//                   firstName,
//                   lastName,
//                   email,
//                   password,
//                   Salt: "1234",
//                }
//             })
//             return true;
//         },
//       },
//     }, // Resolvers
//   });
//   await server.start();
//   app.get("/", (req, res) => {
//     res.json({ message: "Server is up and Running LOL!" });
//   });
//   app.use("/graphql", expressMiddleware(server));
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// }
// init();
