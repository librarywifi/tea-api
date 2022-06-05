const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const tea = {
  oolong: {
    type: "black",
    origin: "You momma's house",
    waterTemp: 200,
    steepTime: 180,
    caffeinated: true,
    flavor: "delish",
  },
  matcha: {
    type: "green",
    origin: "You momma's house",
    waterTemp: 200,
    steepTime: 180,
    caffeinated: false,
    flavor: "delish",
  },
  unknown: {
    type: "unknown",
    origin: "unknown",
    waterTemp: 0,
    steepTime: 0,
    caffeinated: false,
    flavor: "unknown",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (request, response) => {
  console.log(request.params.name);
  const teaName = request.params.name.toLowerCase();
  if (tea[teaName]) {
    response.json(tea[teaName]);
  } else {
    response.json(tea["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log("Connected to port 8000");
});
