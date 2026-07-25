# Base 
FROM node:24-alpine AS base

WORKDIR /app

# Dependencies
FROM base as deps

COPY package*.json ./

RUN npm ci

# Builder
FROM deps AS builder

COPY prisma ./prisma

#Generate Prisma clients
RUN npx prisma generate 

COPY tsconfig.json ./
COPY src ./src

RUN npm run build 

# Production
FROM node:24-alpine AS runner 

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci --omit=dev

#Copy Prisma files
COPY --from=builder /app/prisma ./prisma

#Copy generated prisma client
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

# Copy compiled app
COPY --from=builder /app/dist ./dist

EXPOSE 5000

CMD ["npm", "run","start:prod"]