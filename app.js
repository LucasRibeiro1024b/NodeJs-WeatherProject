const express = require("express");
const https = require("https");

const app = express();

app.get('/', (req, res)=>{
  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=b0faa5c6ae23afdc9dc7c0dbb85ad472";

  https.get(url, function(response){
    console.log(response);
  });

  res.send("Server up and running.");
});

app.listen(3000, ()=>{
  console.log("Server is running on port 3000.");
});