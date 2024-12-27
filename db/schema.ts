import { pgTable, serial, text, varchar, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { boolean } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  url: text("url"),
  userId: varchar("userId"),
});

export const projectsRelations = relations(projects, ({ many }) => ({
  feedbacks: many(feedbacks),
}));

export const feedbacks = pgTable("feedbacks", {
  id: serial("id").primaryKey(),
  projectId: integer("projectId"),
  userName: text("user_name"),
  userEmail: text("user_email"),
  message: text("message"),
  rating: integer("rating").notNull(),
});

export const feedbacksRelations = relations(feedbacks, ({ one }) => ({
  project: one(projects, {
    fields: [feedbacks.projectId],
    references: [projects.id],
  }),
}));

export const subscriptions = pgTable("subscriptions", {
  id: serial("id").primaryKey(),
  userId: varchar("userID"),
  stripeCustomerId: text("stripe_customer_id"),
  stripeSubscriptionId: text("stripe_subscription_id"),
  subscribed: boolean("subscribed"),
});
