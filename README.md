# Whats Strapi
** Strapi is an open-source, Node.js-based headless content management system (CMS) that allows developers to create and manage content via APIs for any frontend or platform **
 
--------------------------
## Project Planning Phase
-------------------------
For this project, we will be creating a Content Management System for a blog website. 

------------------
## Create project
------------------
npx create-strapi-app <projectName> --quickstart
Replace <projectName> with your project name.

Example:
`npx create-strapi-app myProject --quickstart`

Log in to:
http://localhost:1337/admin
Create an admin user

---------------------------------------
## Create Content Types (Database Models)
---------------------------------------
Content types that are needed for the project can be created by following the below steps.

Go to:
Admin Panel → Content-Type Builder

-----------------------
## Create Collection Type
-----------------------
- Add fields
- Add relations
- Set validations

Ex: As we are creating a blog site following entities will be created. 

- Articles and authors need to be maintained.
- Authors would have the fields titles, summary and body as text fields. 
- Organisation entity will also be created and it will have relation to the articles.


By following the above steps, you could create those entities, and Strapi will create the underlying database structures and APIs.

------------------
## Enable API Access
------------------
Strapi will generate the required APIs based on the entities that are introduced in the above steps. But still, the following configurations need to be done in order to access those APIs.

APIs can be enabled as Public or Authenticated for each of the entities that were introduced in the above step.

Go to:
Settings → Users & Permissions → Roles → Public (or Authenticated)

Enable required actions:
- find
- findOne
- create
- update
- delete
- Save

---------------------------
## Generic REST API Structure
---------------------------
Strapi will auto-generate the REST APIs based on the entities that were introduced, considering the configurations that were done in the above step.

To access the REST APIs, you would need to get the access tokens from stapi.
Go to http://localhost:1337/admin
Settings > Users & Permissions plugin > Roles > Public or Authenticated > View Token

The token needs to be used as a bearer token to access the APIs.
--------------
## 📌 CREATE
--------------
POST /api/articles

Request Example
`POST http://localhost:1337/api/articles/`
```
{
  "data": 
 {
    "title": "New Article",
    "slug": "new-article",
    "summary": "This is a summary",
    "body": "This is the full content of the article",
    "publishDate": "2026-03-20T10:00:00.000Z",
    "locale": "en"
  }
}
```
------------
## 📌 GET ALL
------------
PUT /api/<collection-name>/

Request Example
`GET /api/articles`
```
{
            "id": 5,
            "documentId": "mu2mcbtsp0ci5ogfm2u9u4c8",
            "title": "Title 3",
            "slug": "article-2",
            "summary": "aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt",
            "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nAenean commodo ligula eget dolor. Aenean massa.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nDonec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.\n\nNulla consequat massa quis enim.\n\nDonec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.\n\nIn enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n\nNullam dictum felis eu pede mollis pretium. Integer tincidunt.",
            "publishDate": null,
            "createdAt": "2026-03-18T10:59:39.209Z",
            "updatedAt": "2026-03-18T10:59:41.057Z",
            "publishedAt": "2026-03-18T10:59:41.078Z",
            "locale": "en"
}
```
------------
## 📌 GET ONE
------------
GET /api/<collection-name>/:id

Request Example
`GET /api/articles/q9zytuiek7odox7afnmmgaqv`
```
{
    "data": {
        "id": 3,
        "documentId": "q9zytuiek7odox7afnmmgaqv",
        "title": "article2",
        "slug": "article-1",
        "summary": "la consequat massa quis enim",
        "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nAenean commodo ligula eget dolor. Aenean massa.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nDonec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.\n\nNulla consequat massa quis enim",
        "publishDate": null,
        "createdAt": "2026-03-18T10:15:30.167Z",
        "updatedAt": "2026-03-18T10:15:30.167Z",
        "publishedAt": "2026-03-18T10:15:30.196Z",
        "locale": "en"
    },
    "meta": {}
}
```
------------
## 📌 UPDATE
------------
PUT /api/<collection-name>/:id

Request Example
`PUT /api/articles/zvarnllu1pzqeyjkamoyn0jv`
```
{
  "data": {
    "title": "Updated Title",
    "summary": "Updated summary"
  }
}
```
-------------
## 📌 DELETE
-------------
DELETE /api/<collection-name>/:id

Request Example
`DELETE /api/articles/dc4eipszz7e5518a1j26jinz`

----------------------------------
## 📌 POPULATE WITH SELECTED FIELDS
----------------------------------
GET api/articles?fields[0]=title

Request Example
`GET /api/articles?fields=title`
```
{
    "data": [
        {
            "id": 3,
            "documentId": "q9zytuiek7odox7afnmmgaqv",
            "title": "article2"
        },
        {
            "id": 5,
            "documentId": "mu2mcbtsp0ci5ogfm2u9u4c8",
            "title": "Title 3"
        },
]
}
```
------------------------
## 📌 POPULATE RELATION
------------------------
GET /api/<collection>?populate=*
Or specific:
GET /api/<collection>?populate=relationName

Request Example
`GET api/articles?populate=organization` OR `GET api/articles?populate=*`
```
{
    "data": {
        "id": 3,
        "documentId": "q9zytuiek7odox7afnmmgaqv",
        "title": "article2",
        "slug": "article-1",
        "summary": "la consequat massa quis enim",
        "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nAenean commodo ligula eget dolor. Aenean massa.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nDonec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.\n\nNulla consequat massa quis enim",
        "publishDate": null,
        "createdAt": "2026-03-18T10:15:30.167Z",
        "updatedAt": "2026-03-18T10:15:30.167Z",
        "publishedAt": "2026-03-18T10:15:30.196Z",
        "locale": "en",
            "organization": {
                "id": 2,
                "documentId": "xu8euk4edct25r73x2qjsgv0",
                "name": "DailyContent",
                "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                "website": "daily.com",
                "createdAt": "2026-03-18T10:17:44.184Z",
                "updatedAt": "2026-03-18T10:17:44.184Z",
                "publishedAt": "2026-03-18T10:17:44.211Z"
            }

    },
    "meta": {}
}
```
------------------------------------------
## 📁 Standard Project Structure (Strapi)
------------------------------------------
projectName/
│
├── config/
├── src/
│   ├── api/
│   │   ├── entityA/
│   │   └── entityB/
│   └── extensions/
│
├── Dockerfile
├── docker-compose.yml
└── package.json


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# STRAPI + DOCKER BACKEND PROJECT BLUEPRINT
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# How to Dockerize the Strapi Project
--------------------------------------
## Create a dockerfile
--------------------------------------
```
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]
```
--------------------------------
## Create .dockerignore file
--------------------------------
```
node_modules
npm-debug.log
Dockerfile
.dockerignore
.git
.gitignore
.env
build
.cache
.tmp
```
--------------------------------
## Create docker-compose.yml file
--------------------------------
```
services:
  strapi:
    restart: always
    container_name: strapi-app
    build: .
    ports:
      - "1337:1337"
    environment:
      DATABASE_CLIENT: mysql
      DATABASE_HOST: mysql
      DATABASE_PORT: 3306
      DATABASE_NAME: strapi
      DATABASE_USERNAME: strapi
      DATABASE_PASSWORD: strapi
      NODE_ENV: development
    depends_on:
      mysql:
        condition: service_healthy # This requires the healthcheck below
    volumes:
      - .:/app
      - /app/node_modules

  mysql:
    container_name: strapi-db
    image: mysql:8
    restart: always
    environment:
      MYSQL_DATABASE: strapi  # Matches Strapi's DATABASE_NAME
      MYSQL_ROOT_PASSWORD: password
      MYSQL_USER: strapi
      MYSQL_PASSWORD: strapi
    ports:
      - "3306:3306"
    volumes:
      - mysql-data:/var/lib/mysql
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost", "-u", "strapi", "-pstrapi"]
      interval: 10s
      timeout: 5s
      retries: 5
      start_period: 30s # Gives MySQL time to initialize before failing checks

volumes:
  mysql-data:
```
------------------
## Create .env file
------------------
```
# Server Configuration
HOST=0.0.0.0
PORT=1337

# Secrets & Security
# Tip: You can generate these using `openssl rand -base64 32`
APP_KEYS=replace_with_4_comma_separated_keys
API_TOKEN_SALT=replace_with_random_string
ADMIN_JWT_SECRET=replace_with_random_string
TRANSFER_TOKEN_SALT=replace_with_random_string
ENCRYPTION_KEY=replace_with_random_string
JWT_SECRET=replace_with_random_string

# Database Configuration
# These match the 'mysql' service in docker-compose.yml
DATABASE_CLIENT=mysql
DATABASE_HOST=mysql
DATABASE_PORT=3306
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=strapi
DATABASE_SSL=false
```
-----------------------------
## Update config/database.js
-----------------------------
```
import path from 'path';
import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Database => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  const connections = {
    mysql: {
      connection: {
        host: env('DATABASE_HOST', 'mysql'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };
  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
export default config;
```
-------------------------
## Build & Run
-------------------------
docker compose up --build

---------------
## Access Strapi
---------------
http://localhost:1337/



----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Default Strapi Documentation
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>







