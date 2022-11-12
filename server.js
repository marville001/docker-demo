const express = require("express");
const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
    console.log("Accessing app on / ");
    res.render("pages/index");
});

// JSON DATA
app.get("/json", (req, res) => {
    console.log("Accessing app on /json ");
	res.send({
		data: [
			{ id: 1, name: "Dockerfile" },
			{ id: 2, name: "Docker image" },
			{ id: 3, name: "Docker container" },
		]
	})
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is listening on port 8080"));
