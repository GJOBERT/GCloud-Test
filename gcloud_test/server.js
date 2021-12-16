const express = require("express");
const pingRoutes = require("./routes");
const bodyParser = require("body-parser");
const http = require('http');
const port = "8080";

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(pingRoutes);
const server = http.createServer(app);

server.on("listening", () => {
    const address = server.address();
    const bind = typeof address === "string" ? "pipe " + address : "port " + port;
    console.log("Listening on " + bind);
});
server.listen(port);