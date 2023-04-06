const express = require("express")
const app = express()
const socketio = require("socket.io")
const http = require('http');
const setupSocketIO = require('./SocketIO/socket');
const PORT = 8080||process.env.PORT
const Chat = require("./Routes/chat")
const server = http.createServer(app);
const connection = require("./DB/connection")
const cors = require("cors")
connection();
setupSocketIO(server);

app.use(cors(({
    origin: 'http://localhost:3000'
})))
app.use("/api",Chat)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/",(req,res)=>{
    res.send("Hello How Are You Welcome to Jicro Chat App for Admins")
})

server.listen(PORT,(e)=>{
    console.log(`http://localhost:${PORT}`)
});