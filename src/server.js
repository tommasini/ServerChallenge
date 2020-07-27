"use strict";
import Hapi from "@hapi/hapi";
import routes from "./routes";

const server = Hapi.server({
  port: 3000,
  host: "localhost",
});

server.route(routes);

const init = async () => {
  try {
    await server.register({
      plugin: require('hapi-cors'),
      options: {
          origins: ['http://localhost:3000']
      }
  });
  
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("Server running at:", server.info.uri);
};

init();
