const express = require("express");
const apiRouter = express.Router();

apiRouter.get("/", async (req, res, next) => {
  res.send({ message: "You've reached /api" });

  next();
});



apiRouter.use((error, req, res, next) => {
  res.send(error);
});

module.exports = apiRouter;
