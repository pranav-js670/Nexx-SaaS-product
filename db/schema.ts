import { pgTable, serial, text, varchar, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Define the projects table
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(), // This is an integer
  name: text("name"),
  description: text("description"),
  url: text("url"),
  userId: varchar("userId"), // varchar type for userId, used for associating users, not involved in the projectId relation
});

// Define relations for projects (one project has many feedbacks)
export const projectsRelations = relations(projects, ({ many }) => ({
  feedbacks: many(feedbacks),
}));

// Define the feedbacks table
export const feedbacks = pgTable("feedbacks", {
  id: serial("id").primaryKey(), // This is an integer
  projectId: integer("projectId"), // Integer, relates to projects.id
  userName: text("user_name"),
  userEmail: text("user_email"),
  message: text("message"),
  rating: integer("rating").notNull(),
});

// Define relations for feedbacks (feedback belongs to one project)
export const feedbacksRelations = relations(feedbacks, ({ one }) => ({
  project: one(projects, {
    fields: [feedbacks.projectId], // feedbacks.projectId (integer)
    references: [projects.id], // projects.id (integer)
  }),
}));
