# Architecture

## Tech Stack

### Frontend

- Next.js
- TypeScript
- TailwindCSS
- TanStack Query

### Backend

- Node.js
- Express
- TypeScript

### Database

- PostgresSQL
- Prisma

### Authentication

- JWT
- HttpOnly Cookies

## Folder Structure

### Backend Folder Structure

```txt
src/
├─ controllers/
│  ├─ application.controller.ts
│  ├─ auth.controller.ts
│  └─ dashboard.controller.ts
├─ lib/
│  └─ prisma.ts
├─ middleware/
│  └─ auth.middleware.ts
├─ routes/
│  ├─ application.routes.ts
│  ├─ auth.routes.ts
│  └─ dashboard.routes.ts
├─ services/
│  ├─ application.service.ts
│  ├─ auth.service.ts
│  └─ dashboard.service.ts
├─ types/
│  ├─ application.types.ts
│  ├─ auth.types.ts
│  └─ index.d.ts
├─ utils/
│  ├─ streak.ts
│  └─ token.ts
├─ app.ts
├─ seed.ts
└─ server.ts

```

## Data Flow

Frontend <br/>
↓ <br/>
API Route <br/>
↓ <br/>
Controller <br/>
↓ <br/>
Service <br/>
↓ <br/>
Prisma <br/>
↓ <br/>
PostgreSQL <br/>

### Frontend Folder Structure

components/
BentoComponents/

```txt
app/
├─ add-application/
│  └─ page.tsx
├─ applications/
│  └─ page.tsx
├─ components/
│  ├─ BentoComponents/
│  │  ├─ ApplicationRecords.tsx
│  │  ├─ ApplicationStats.tsx
│  │  ├─ ApplicationStreak.tsx
│  │  ├─ RecentActivity.tsx
│  │  └─ RecentApplications.tsx
│  ├─ AccountMenu.tsx
│  ├─ AddApplicationModal.tsx
│  ├─ ApplicationContainer.tsx
│  ├─ BentoHome.tsx
│  ├─ Footer.tsx
│  ├─ LoginInput.tsx
│  ├─ NavBar.tsx
│  ├─ SearchApplication.tsx
│  ├─ SideNavBar.tsx
│  ├─ SignupInput.tsx
│  └─ TableApplications.tsx
├─ hooks/
│  ├─ useApplications.ts
│  ├─ useCreateApplication.ts
│  ├─ useDashboard.ts
│  ├─ useDeleteApplication.ts
│  └─ useUpdateApplication.ts
├─ lib/
│  ├─ activity.ts
│  ├─ api.ts
│  ├─ formatters.ts
│  ├─ roles.ts
│  └─ statusByColor.ts
├─ types/
│  └─ types.ts
├─ user-login/
│  └─ page.tsx
├─ user-signup/
│  └─ page.tsx
├─ favicon.ico
├─ globals.css
├─ layout.tsx
├─ page.tsx
└─ provider.tsx

```
