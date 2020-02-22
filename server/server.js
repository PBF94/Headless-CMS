const express = require("express");
const path = require("path");

const app = express();

app.use("/", express.static(path.join(__dirname, "..", "dist")));
app.use("/dist", express.static(path.join(__dirname, "..", "dist")));

const routes = require("./routes");
app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.set("port", PORT);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
