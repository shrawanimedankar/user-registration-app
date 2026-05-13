require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const dbUrl = process.env.ATLASDB_URL;

const signupRoutes = require("./routes/signup");


app.use(cors());
app.use(express.json());

// Connect MongoDB
main()
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

app.use("/", signupRoutes);

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});