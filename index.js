const express = require("express");
const db = require("./db");
const PORT = "8080";

const app = express();

// Mount on API
app.use("/api", require("./api"));

// Run server function
const serverRun = () => {
  app.listen(PORT, () => {
    console.log(`Live on port: ${PORT}`);
  });
};

async function main() {
  await db.sync();
  await serverRun();
}

main();

module.exports = app;