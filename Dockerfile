# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
COPY node_modules ./

# Copy the rest of the project files to the working directory
COPY . .

# Expose a port (if your app listens on a specific port)
EXPOSE 3000

# Command to run your application
CMD ["node", "./src/app/App.tsx"]