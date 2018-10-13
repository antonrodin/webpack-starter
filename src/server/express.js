import express from "express"
import path from "path"

// Create simple express server
const server = express();

// User static middleware
const staticMiddleware = express.static("dist");

server.use(staticMiddleware);
server.listen(8080, () => {
    console.log("The Server is Listen 8080")
})