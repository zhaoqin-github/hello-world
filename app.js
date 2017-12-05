var express = require("express");
var app = express();

var Markdown = require("markdown-to-html").Markdown;
var md = new Markdown();
md.bufmax = 2048;
var fileName = "README.md";
var md_opts = { title: "Hello World" };

md.render(fileName, md_opts, function(err) {
    if (err) {
        process.exit();
    }
});

app.get("/", function(req, res) {
    res.send(md.html);
});

var port = (process.env.PORT || 3000);

console.log("app is listening on port: %s", port);

app.listen(port);
