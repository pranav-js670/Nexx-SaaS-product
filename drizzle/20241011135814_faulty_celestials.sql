CREATE TABLE IF NOT EXISTS "feedbacks" (
	"id" serial PRIMARY KEY NOT NULL,
	"projectId" integer,
	"user_name" text,
	"user_email" text,
	"message" text,
	"rating" integer
);
--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "userId" varchar;