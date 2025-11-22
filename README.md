# Final Repo — Next.js Clinic Management

A production-ready Next.js application scaffold for a clinic management system (patients, visits, user/auth). This repository uses Next.js (App Router), Prisma for database ORM, NextAuth for authentication, and a component-driven UI.

## Table of contents

-   [Project overview](#project-overview)
-   [Tech stack](#tech-stack)
-   [Features](#features)
-   [Prerequisites](#prerequisites)
-   [Setup & local development](#setup--local-development)
-   [Environment variables](#environment-variables)
-   [Database (Prisma)](#database-prisma)
-   [API routes summary](#api-routes-summary)
-   [Folder structure highlights](#folder-structure-highlights)
-   [Testing & linting](#testing--linting)
-   [Deployment](#deployment)
-   [Contributing](#contributing)
-   [License & contact](#license--contact)

## Project overview

This is a Next.js project with an App Router layout. It organizes features into `api/` and `app/` routes, and follows a feature-first structure inside `api/features/*`. UI components live under `components/` and `ui/`. Prisma handles the database layer, and NextAuth provides authentication.

It's designed to manage users, patients, and visits (medical appointments). The codebase includes reusable UI primitives, hooks, and server-side API endpoints.

## Tech stack

-   Next.js (App Router)
-   React + TypeScript
-   Prisma (ORM)
-   NextAuth (authentication)
-   pnpm (package manager — pnpm-lock.yaml present)
-   Tailwind / PostCSS (postcss.config.mjs present)
-   Node.js

## Features

-   Authentication with NextAuth
-   CRUD for Patients and Visits via server API routes
-   Prisma schema + client generation
-   Component-driven UI/Design system under `components/` and `ui/`
-   Centralized axios instances and contexts in `config/`
-   Useful hooks: `use-toast`, `use-mobile`, `useLogout`

## Prerequisites

-   Node.js 18+ (use Node LTS)
-   pnpm (recommended) or npm/yarn
-   PostgreSQL (or another DB supported by Prisma) for production; SQLite can be used for quick local testing depending on your `DATABASE_URL`.

## Setup & local development

1. Clone the repo

2. Install dependencies (pnpm recommended):

```bash
pnpm install
```

3. Create a `.env` file at the repository root. See [Environment variables](#environment-variables) below for required keys.

4. Initialize Prisma & database (see NOTE below if using a specific DB):

```bash
# Generate prisma client
pnpm prisma generate

# Create migration (if you changed schema) and apply
pnpm prisma migrate dev --name init
```

5. Run the dev server:

```bash
pnpm dev
# or
pnpm next dev
```

Open http://localhost:3000 to view.

NOTE: This project includes `prisma/` schema and `prisma/client.ts`. Adjust the `DATABASE_URL` in your `.env` to point to your DB (Postgres is recommended). If you want to use SQLite for quick local tests, set `DATABASE_URL="file:./dev.db"` and run the prisma migrate/generate commands.

## Environment variables

Create a `.env` file (example values):

```
DATABASE_URL=postgresql://user:password@localhost:5432/clinicdb
NEXTAUTH_SECRET=your_random_secret_here
NEXTAUTH_URL=http://localhost:3000
# Optionally
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

-   DATABASE_URL: connection string for your DB for Prisma
-   NEXTAUTH_SECRET: used by NextAuth (generate with e.g. `openssl rand -base64 32`)
-   NEXTAUTH_URL: base URL used by NextAuth for callbacks

There may be additional provider-specific variables if using OAuth providers (Google, GitHub, etc.) — check `api/auth/[...nextauth]` and `config/nextAuthOptions.ts` for provider setup.

## Database (Prisma)

This repo uses Prisma. Key commands:

```bash
# Generate client
pnpm prisma generate

# Apply migrations (dev)
pnpm prisma migrate dev --name descriptive_name

# Open prisma studio to inspect DB
pnpm prisma studio
```

Prisma client is re-exported in `prisma/client.ts`. Auto-generated client files exist under `generated/prisma/` in the repo (watch out for that in commits).

## API routes summary

The project exposes API routes under `api/` following Next.js server route conventions. Important endpoints include:

-   `api/auth/[...nextauth]` — authentication (NextAuth)
-   `api/create-user/route.ts` — create user helper
-   `api/logout/route.ts` — logout endpoint
-   `api/patients/route.ts` and `api/patients/[id]/route.ts` — patients CRUD
-   `api/visits/route.ts` and `api/visits/[id]/route.ts` — visits CRUD

Also check `api/features/` for feature-specific service wiring and `app/(pages)/` for client pages and layouts.

## Folder structure highlights

-   `app/` — Next.js App Router pages & layouts. Look under `(pages)/` for global layout and `dashboard`, `patients`, `visits` pages.
-   `api/` — server route handlers and feature services
-   `components/` — shared React components and UI for forms, nav, theme provider
-   `ui/` — low-level design system primitives (buttons, inputs, dialog, table, etc.)
-   `prisma/` — Prisma schema and client helper
-   `config/` — axios clients and NextAuth options
-   `hooks/` — custom React hooks (use-toast, use-mobile, useLogout)
-   `lib/` — utilities (hashing, validation schemas)

## Testing & linting

This repository does not include explicit test harnesses in the root; add tests as appropriate (Jest, Vitest). For linting and types:

```bash
# Typecheck
pnpm tsc --noEmit

# Add/eslint if desired (not present by default)
```

## Deployment

Recommended: Vercel — automatic Next.js support. On Vercel set environment variables (DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL, and any provider keys). Ensure that the database is accessible from your hosting environment (use managed Postgres for production).

For self-hosting (Docker), create a production build and serve:

```bash
pnpm build
pnpm start
```

Remember to run Prisma migrations against your production DB before starting.

## Common commands

```bash
pnpm install
pnpm dev        # development
pnpm build
pnpm start      # production start after build
pnpm prisma generate
pnpm prisma migrate dev --name init
pnpm prisma studio
```

## Contributing

-   Keep UI components reusable and follow the `ui/` primitives.
-   Prefer feature-sliced organization: `api/features/*` and `app/<feature>`.
-   Run `pnpm prisma generate` if you change the `schema.prisma`.
-   Avoid committing `generated/prisma/*` unless intentionally vendoring the client.

## Troubleshooting

-   If you see prisma client errors: run `pnpm prisma generate` and restart dev server.
-   If auth callbacks fail: verify `NEXTAUTH_URL` and `NEXTAUTH_SECRET`.

## Next steps / Recommendations

-   Add tests (unit + integration) and CI.
-   Add a `Makefile` or npm scripts for common flows.
-   Add seed scripts for dev database (`prisma/seed.ts`) if not present.
-   Add codeowners and PR templates for collaboration.

## License & contact

This repo does not include an explicit license file. Add `LICENSE` (MIT/Apache/etc.) if you plan to open-source.

For questions or help, check the `api/` route handlers and `config/nextAuthOptions.ts` for auth wiring, and `prisma/schema.prisma` for database model definitions.

---

README generated for this workspace on behalf of the project owner. If you want changes (shorter/longer, add badges, add sample .env, or auto-generated API docs), tell me which additions to include and I will update the README.
