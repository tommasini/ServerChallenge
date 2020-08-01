"use strict";
import Hapi from "@hapi/hapi";
import routes from "./routes";

const server = Hapi.server({
  port: 3000,
  host: "localhost",
});

const init = async () => {
  try {
    const checkOrigin = (origin) => {
      console.log(origin);
      return false;
      if (origin === "http://localhost:3000") {
        return true;
      } else {
        return false;
      }
    };

    await server.register([require('vision'), require('inert'), require('lout'),{
      plugin: 
        require("hapi-cors"),
      options: {
        origins: ["*"],
        allowCredentials: "true",
        exposeHeaders: ["content-type", "content-length"],
        maxAge: 600,
        methods: ["GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS"],
        headers: ["Accept", "Content-Type", "Authorization"], // add your header params
      },
      checkOrigin: true,
    }]);

    server.route(routes);
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("Server running at:", server.info.uri);
};

init();
