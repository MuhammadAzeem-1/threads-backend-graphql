import { prismaClient } from "../lib/db";
const { createHmac, randomBytes } = require("node:crypto");
const JWT = require("jsonwebtoken");

export interface CreateUserPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface GetUserTokenPayload {
  email: string;
  password: string;
}

const JWT_SECRET = "Azeem";

class UserService {
  private static hashedPassword(password: string, Salt: string) {
    const hashedPassword = createHmac("sha256", Salt)
      .update(password)
      .digest("hex");

    return hashedPassword;
  }

  public static createUser(payload: CreateUserPayload) {
    // create user
    const { firstName, lastName, email, password } = payload;
    // password hashing
    const Salt = randomBytes(32).toString("hex");
    const hashedPassword = UserService.hashedPassword(password, Salt);

    return prismaClient.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        Salt,
      },
    });
  }

  // function to get user by email
  private static async getUserByEmail(email: string) {
    return prismaClient.user.findUnique({
      where: {
        email,
      },
    });
  }

  public static async getUserById(id: string) {
    return prismaClient.user.findUnique({
      where: {
        id,
      },
    });
  }

  public static async getUserToken(payload: GetUserTokenPayload) {
    const { email, password } = payload;

    const user = await UserService.getUserByEmail(email);

    if (!user) {
      throw new Error("user not found");
    }

    const UserSalt = user.Salt;
    const hashedPassword = UserService.hashedPassword(password, UserSalt);

    if (hashedPassword !== user.password) {
      throw new Error("password is incorrect");
    }

    // genrate token

    const token = JWT.sign({ id: user.id, email: user.email }, JWT_SECRET);

    return token;
  }

  public static decodeJWTToken(token: string) {
    return JWT.verify(token, JWT_SECRET);
  }
}

export default UserService;
