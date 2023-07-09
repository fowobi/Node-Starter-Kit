const express = require("express");
const app = express();
const port = 9090;

const trainees = [
    {name: "Maziar",region: "north-west"},
    {name: "Shiemen",region: "north-west"},
    {name: "Zaw",region: "north-west"},
    {name: "Azin",region : "london"},
    {name: "Chioma",region: "london"},
    {name: "Pakize",region: "london"},
];

//http://localhost:9090

app.get("/", function(request,response){
    // console.log(request);
    console.log("hello world,you've reached my API")
    response.send("Hello world,you're getting a response from my server")
});
  //http://localhost:9090/trainees
  //http://localhost:9090/trainees?region=north-west

app.get("/trainees", function(request,response){
    console.log(request.query.region, "<---- request.query.region");
  console.log("Received a request to the /trainees endpoint");
  response.send({trainees});
});

app.listen(port, function(){
    console.log("my application is now listening on port 9090...");
});