const express = require("express"); // Import express
const app = express();
const array_routes = require("./routes"); // Import dari routes.js

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    // home
    return res.send(`Welcome to the jungle`);
});

app.use("/array", array_routes);

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`);
});