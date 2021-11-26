const express = require("express");
const { router: usersRouter } = require("./routes/usersRouter");

module.exports = () => {
  const app = express();
  app.set("port", 3000);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/users", usersRouter);
  return app;
};
