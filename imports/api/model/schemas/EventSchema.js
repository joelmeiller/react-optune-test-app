// Simple Schema
import { SimpleSchema } from 'simpl-schema'

export const EventSchema = new SimpleSchema({
  title: String,
  date: Date,
  description: { type: String, optional: true }
})

