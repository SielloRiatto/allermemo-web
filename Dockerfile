# Stage 1: Install Dependencies 
FROM node:20.11-slim AS installation
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Stage 2: Building
FROM node:20.11-slim AS build
WORKDIR /app
COPY --from=installation /app/.eslintrc.json /app/next.config.mjs /app/next-env.d.ts /app/postcss.config.js /app/tailwind.config.ts /app/tsconfig.json ./
COPY --from=installation /app/public ./public
COPY --from=installation /app/package.json /app/package-lock.json ./
COPY --from=installation /app/node_modules ./node_modules
COPY --from=installation /app/src ./src
RUN npm run build

# Stage 3: Serve Production Build
FROM node:20.11-slim AS production
WORKDIR /app
COPY --from=build /app/package.json /app/package-lock.json ./
RUN npm install --omit=dev
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
EXPOSE 3000
CMD ["npm", "start"]
