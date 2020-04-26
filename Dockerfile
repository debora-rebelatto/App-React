# Pull official base image
FROM node:13.12.0-alpine

# Set working directory
WORKDIR /app

# Add `/app/node_modules/.bin to $PATH` 
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# add app
COPY . ./

EXPOSE 8900
CMD npm start
