import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

//* AUTH
export const USER_ROLES = { ADMIN: 'admin', USER: 'user' } as const

export type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES]

//? AUTHENTICATION

//* Users table
export const user = sqliteTable('user', {
  id: text().primaryKey(),
  name: text().notNull(),
  email: text().notNull().unique(),
  emailVerified: integer({ mode: 'boolean' }).$defaultFn(() => false).notNull(),
  image: text(),
  role: text().$type<UserRole>().notNull().default(USER_ROLES.USER),
  isActive: integer({ mode: 'boolean' }).notNull().default(true),
  createdAt: integer({ mode: 'timestamp' }).$defaultFn(() => new Date()).notNull(),
  updatedAt: integer({ mode: 'timestamp' }).$defaultFn(() => new Date()).notNull()
})

//* Session table for user sessions
export const session = sqliteTable('session', {
  id: text('id').primaryKey(),
  expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull(),
  token: text('token').notNull().unique(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' })
})

//* Account table for third-party accounts
export const account = sqliteTable('account', {
  id: text('id').primaryKey(),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  idToken: text('id_token'),
  accessTokenExpiresAt: integer('access_token_expires_at', { mode: 'timestamp' }),
  refreshTokenExpiresAt: integer('refresh_token_expires_at', { mode: 'timestamp' }),
  scope: text('scope'),
  password: text('password'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull()
})

//* Verification table
export const verification = sqliteTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => /* @__PURE__ */ new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => /* @__PURE__ */ new Date())
})

//? APP
//* Transactions table
export const transaction = sqliteTable('transaction', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  amount: integer('amount').notNull(),
  description: text('description').notNull(),
  type: text('type').notNull(),
  status: text('status').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date())
})

//! TIPOS

export type InsertUser = typeof user.$inferInsert
export type SelectUser = typeof user.$inferSelect

export const TRANSACTION_TYPES = {
  INCOME: 'income',
  EXPENSE: 'expense'
} as const

export const TRANSACTION_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled'
} as const

export type InsertTransaction = typeof transaction.$inferInsert
export type SelectTransaction = typeof transaction.$inferSelect
