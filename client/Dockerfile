# Base 
FROM node:24-alpine AS base

# Dependencies 
FROM base AS deps

WORKDIR /app

COPY package*.json ./

RUN npm ci

# Builder container
FROM deps AS builder

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

COPY . .

RUN npm run build

# Runner
FROM base AS runner

WORKDIR /app    

ENV NODE_ENV=production

# Adding non-root user for extra security
RUN addgroup -S nextjs
RUN adduser -S nextjs -G nextjs

# Copy only files needed to run the application
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/public ./public
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static

# Run as the non-root created
USER nextjs

# Document the port application listens to (note: It doesnt expose the port!)
EXPOSE 3000

# Start the Next.js standalone server
CMD [ "node", "server.js" ]