import {Server } from "socket.io";
import http from "http";
import express from "express";

const app = express(); //express server


const server = http.createServer(app); //adding socket error on the express server
const io = new Server(server ,{
    cors :{
        origin:["http://localhost:5173"],
        method :["GET", "POST"],
    }
});

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {};
io.on('connection', (socket) => {  //listenting for connections
    
    const userId = socket.handshake.query.userId;
    if(userId != "undefined")userSocketMap[userId] = socket.id;
    
    //io.emit() is used ti send Events to all the connected clients
    io.emit("getOnlineUsers",Object.keys(userSocketMap));






    //socket.io is used to listen to the events .Can be used both on client ans server used

    socket.on("disconnect",()=>{
        
        delete userSocketMap[userId];
        io.emit("getOnlineUsers",Object.keys(userSocketMap));
    })

})



export {app,io,server}
