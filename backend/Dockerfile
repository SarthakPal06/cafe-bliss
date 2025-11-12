# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy rest of the backend code
COPY . .

# Expose backend port
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]
