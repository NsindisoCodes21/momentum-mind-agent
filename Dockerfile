# Stage 1: Build the Vite app
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build the Vite app
RUN npm run build

# Stage 2: Serve the app with nginx
FROM nginx:stable-alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from Vite (usually in /dist)
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: SPA routing
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
