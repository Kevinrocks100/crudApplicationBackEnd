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

app.get("/", (req, res) => {
  res.send(`    
    <div>
      <h1>Welcome to Kevin's API</h1>
      <img src="https://www.cleo.com/sites/default/files/2022-08/api-integration.png" alt="API Integration" />
    </div>`
  );
});
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