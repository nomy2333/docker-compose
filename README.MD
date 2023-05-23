##A small project with docker compose.
## requirements: set a internal database and show the visits number when reload the page
## use the redis:
The open source, in-memory data store used by millions of developers as a database, cache, streaming engine, and message broker.
## how to build and run:
cmd:docker build .
cmd:docker build -t artoriay/docker-compose .
cmd:docker run artoriay/docker-compose
it will meet the error of redis, should run redis on docker
cmd: docker run redis
but these two image and containers are not connect each other automatically, use 2 methods to solve it:
### use docker cli's network feature
### use docker compose:
### how to use docker compose:
should write the docker-compose.yml file to contain all the containers: node-app and redis server.
version: '3'
services:
  // use the image in the docker
  redis-server:
    image: 'redis'
  // use the program write by ourselves
  node-app:
    build: .
    ports: 
      - "8081:3000"
  //8081 is localhost port, 3000 is container port, url: localhost:8081
## how to run docker and stop it
cmd: docker start [container name]
 to start a container
cmd: docker run -d [image name]
to start the image and generate a new container and showing the container ID in the following line
cmd: docker stop [container id/name]
### how to run docker-compose and stop it 
cmd:docker-compose up -d
// it will luanch in backend
cmd:docker-compose down
// it will stop related containers and remove them
cmd: docker-compose up --build
//it will rebuild the container
### restart policies
no: never attempt to restart it. if container stops or crashes,in yml file 'no' value should have single qoute ''
always: always restart if stops, do not need '' in yml file
on-failure: only restart if containers stops with an error code,do not need '' in yml file
unless-stopped: always restart unless we force stop it,do not need '' in yml file


