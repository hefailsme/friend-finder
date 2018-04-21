var path = require("path")

// GET route that displays home.html
module.exports = function (app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })
    // USE route to home.html
    app.use("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))

    })
}