<div align="center">
  <br />
     <a href="#" target="_blank">
      <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*w5nR3P3nr4Yqah-trrTdPg.png" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="docker" />
    <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="postgres" />
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
  </div>

  <h3 align="center">Backend with GraphQL</h3>

   <div align="center">
     A complete backend in graphql foucs on GRAPHQL setup with nodejs and Postgres Database with Apollo/Server
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. 🤖 [Architecture](#Architecture)
3. ⚙️ [Tech Stack](#tech-stack)
4. 🔋 [Features](#features)
5. 🤸 [Quick Start](#quick-start)
6. 🕸️ [Snippets](#snippets)
7. 🔗 [Links](#links)

## 🚨 Help
If You want help regarding this project or a similar one contact me. 

## <a name="introduction">🤖 Introduction</a>

Creating a backend with Node.js, GraphQL, Docker, PostgreSQL, and Apollo Server involves setting up a robust and scalable architecture for modern web applications. 
By leveraging Docker for containerization, PostgreSQL for the database, and Apollo Server for GraphQL integration, we can efficiently manage and query our data. 
This stack allows for seamless development and deployment, ensuring our backend is both powerful and maintainable.

If you're getting started and need assistance or face any bugs, contact me we will solve this.


## <a name="tech-stack">⚙️ Tech Stack</a>

- typeScript
- Node.js
- GraphQL
- Docker
- Apollo Client

## <a name="Architecture">🤸 Architecture</a>
  <br />
     <a href="#" target="_blank">
      <img src="https://i.postimg.cc/J7g2GNDL/diagram-export-7-21-2024-3-00-06-AM.png" alt="Architecture">
    </a>
  <br />

## <a name="features">🔋 Features</a>

👉 **User Creation**

👉 **Authorization & Authentication**

👉 **Post creation**


and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone --http address
cd threads-backend-graphql
```
**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the docker**

```bash
docker compose up -d
```
**Running the project**

```bash
npm run dev
```


## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>script code</code></summary>

```node 
 "scripts": {
    "start": "node build/index.js",
    "dev": "tsc-watch --onSuccess \"npm start\""
  },
```

</details>

<details>
<summary><code>Modals</code></summary>

```prisma
model User {
  id        String   @id @default(uuid())
  firstName String   @map("first_name")
  lastName  String   @map("last_name")
  profileImageURL String? @map("profile_image_url")
  email     String   @unique
  password  String
  Salt      String

  @@map("users")
}

model Post {
  id        String   @id @default(uuid())
  title     String
  content   String
  authorId  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("posts")
}
```

</details>


## <a name="links">🔗 Links</a>

For more visit my Linkedin profile: www.linkedin.com/in/muhammad-azeem1


<img src="https://github.com/TitanSarim/e-learning-system" alt="Project Banner">
</a>

<br />

#
