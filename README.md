# To get the -> schema.prisma
https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-node-mysql 

# To Set the connection String 
https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-node-mysql

# Defining our first Model (Using Prisma Migrate with JavaScript and MySQL)
https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/using-prisma-migrate-node-mysql

# Prisma Client -> Install Prisma Client (JavaScript and MySQL)
https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/install-prisma-client-node-mysql

# Querying the database using JavaScript and MySQL
https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/querying-the-database-node-mysql

## PrismaClient -> It’s a special class that:
1. Connects your Node.js app to your database

2. Gives you auto-generated, type-safe methods to query or update data in your DB

3. Is created based on your schema (from schema.prisma)

### You usually import it like this:

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

    (Now prisma becomes your bridge to the database.)

Example:

const allUsers = await prisma.user.findMany();

(This fetches all records from the User table.)




## In schema.prisma we do:
1. The models (your database tables)
2. The database connection
3. The client generator

## then what is Model?
* Model -> A definition inside schema.prisma that maps to a table in your DB.



# To validate the scehma.prisma -> npx prisma validate 