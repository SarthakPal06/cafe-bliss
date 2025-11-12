# Step 1: Build stage
FROM node:18-alpine AS build

WORKDIR /app

# Package files copy karo
COPY package*.json ./

# Dependencies install karo
RUN npm install

# Source code copy karo
COPY . .

# Vite build run karo
RUN npm run build

# Step 2: Serve stage
FROM nginx:alpine

# Nginx default html folder me dist copy karo
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx default port expose
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
