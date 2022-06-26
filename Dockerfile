### Runs on a Ubuntu machine/server
FROM node:16.13.0-buster-slim


### Create a directory for the project
WORKDIR /app


### Copying the files from the host machine to the container or Ubuntu machine
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

### Installing the dependencies
RUN npm install

### Making sure the source code is inside Ubuntu machine
COPY . . 



### This command will be executed inside the Ubuntu Machine/Server
CMD ["npm","start"]

