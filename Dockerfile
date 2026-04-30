# Build stage — produce the static dist/ bundle
FROM node:22-alpine AS build

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

# Runtime stage — tiny static-file server
FROM node:22-alpine AS runtime

RUN npm install -g serve@14

WORKDIR /app
COPY --from=build /app/dist ./dist

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget --quiet --tries=1 --spider http://localhost:3000/ || exit 1

CMD ["serve", "-s", "dist", "-l", "3000"]
