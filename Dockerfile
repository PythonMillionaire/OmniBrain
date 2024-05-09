# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY package.json package-lock.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run npm start when the container launches
CMD ["npm", "start"]
