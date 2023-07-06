const express = require("express");
const db = require("./db");
const cors = require("cors");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());

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