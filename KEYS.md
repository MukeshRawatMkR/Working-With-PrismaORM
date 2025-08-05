# keys supported in Prisma(ORM)

✅ 1. Primary Key

    SQL: Uniquely identifies each record.

    Prisma: Use @id directive.

 id Int @id @default(autoincrement())

✅ 2. Foreign Key

    SQL: Links to a primary key in another table.

    Prisma: Represented using relations with @relation.

Example:

 model Post {
  id     Int   @id @default(autoincrement())
  title  String
  author User  @relation(fields: [authorId], references: [id])
  authorId Int
}

 model User {
  id    Int    @id @default(autoincrement())
  name  String
  posts Post[]
}

    authorId is a foreign key referring to User.id.

✅ 3. Unique Key

    SQL: Ensures all values in a column are different.

    Prisma: Use @unique directive.

 email String @unique

✅ 4. Composite Primary Key

    SQL: Primary key composed of multiple columns.

    Prisma: Use @@id([field1, field2]).

model Enrollment {
  studentId Int
  courseId  Int
  @@id([studentId, courseId])
}

✅ 5. Composite Unique Key

    SQL: Combination of columns must be unique.

    Prisma: Use @@unique([field1, field2]).

 @@unique([email, name])

✅ 6. Index Key

    SQL: Used to speed up queries.

    Prisma: Use @@index([field]).

 @@index([email])
