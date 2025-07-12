import http from "http";
import app from "./app.js";
import { dbConnect } from "./db/db.js";


const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(3000, () => {console.log(`server started at port: ${PORT}`)
dbConnect()});
