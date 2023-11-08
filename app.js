const express=require("express");//access
const socket=require("socket.io");

const app=express();//initialize and server ready
app.use(express.static("public"));
let port=3000;
let server=app.listen(port,()=>{
    console.log("listening to port "+port);
});//server functions

let io=socket(server);
io.on("connection",(socket)=>{
    console.log("made socket connection");
    //received data
    socket.on("beginPath",(data)=>{
        //now transfer data to all connected computrs
        io.sockets.emit("beginPath",data);
    })

    socket.on("drawStroke",(data)=>{
        io.sockets.emit("drawStroke",data);

    })
    socket.on("redoUndo",(data)=>{
        io.sockets.emit("redoUndo",data);
    })
});
