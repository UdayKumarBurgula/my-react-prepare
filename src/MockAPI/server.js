// JavaScript source code
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: { origin: "http://localhost:3000" },
});

io.on("connection", (socket) => {
    console.log("User connected", socket.id);

    socket.on("send_message", (msg) => {
        io.emit("receive_message", msg);
    });
});

server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});