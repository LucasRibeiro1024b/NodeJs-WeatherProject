const express = require("express");
const https = require("https");

const app = express();
const token = require("./weatherToken.json");

app.get('/', (req, res)=>{
  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=" + token.token;

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      console.log(data); //returns hexadecimal data
      const weatherData = JSON.parse(data);
      console.log(weatherData);
    });

  });

  res.send("Server up and running.");
});

app.listen(3000, ()=>{
  console.log("Server is running on port 3000.");
});