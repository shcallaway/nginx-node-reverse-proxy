# NGINX Reverse Proxy Example

This project demonstrates how to use NGINX as a reverse proxy for an HTTP server (in this case, written in JavaScript using Node and Express).

## Getting Started

First, make sure you have the major dependencies: NGINX, Node and Yarn, the Node package manager. 

```brew install nginx node yarn```

Next, use Yarn to install the one and only Node dependency: Express.

```yarn```

Finally, you can start NGINX and the Express server. (Neither will daemonize, so you will need two separate shells.)

```nginx -c $(pwd)/nginx.conf```

```yarn start```

You should be able to visit the Express app directly at `http://localhost:9001/`, or via NGINX on port 9000.

