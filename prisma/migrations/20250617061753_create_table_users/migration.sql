-- CreateTable
CREATE TABLE "users" (
    "username" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "token" VARCHAR(100),
    "created_at" TIMESTAMP,
    "updated_at" TIMESTAMP

    CONSTRAINT "users_pkey" PRIMARY KEY ("username")
);
