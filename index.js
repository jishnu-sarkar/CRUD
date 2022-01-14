const bodyParser = require("body-parser");
const express = require("express");
const userRoute = require("./routes/userRoute");
const app = express();

const PORT = 8080;

app.use(bodyParser.json());

app.use("/users", userRoute);

// app.use("/putUser", userRoute);

// app.use("/updateUser", userRoute);

// app.use("/deleteUser", userRoute);

app.listen(PORT, () => {
  console.log(`Connected to the Server at : http://localhost:${PORT}`);
});
