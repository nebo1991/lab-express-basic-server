// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`

const express = require("express");
const morgan = require("morgan");
const projectsData = require("./data/projects.json");
const articlesData = require("./data/articles.json");

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static("public"));
// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json());
// - `morgan` logger to log all incoming requests
app.use(morgan("dev"));
// ROUTES
// Start defining your routes here:

app.get("/", (request, response) => {
  return response.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (request, response) => {
  return response.sendFile(__dirname + "/views/blog.html");
});

app.get("/api/projects", (request, response) => {
  return response.json(projectsData);
});

app.get("/api/articles", (request, response) => {
  return response.json(articlesData);
});

app.get("/*", (request, response) => {
  return response.sendFile(__dirname + "/views/not-found.html");
});

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
  console.log("Server logging on port 5005");
});
