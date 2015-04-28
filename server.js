var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);
var path = require('path');

app.use(express.static('./src/index.html'));
app.use(require('connect-livereload')());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './src', 'index.html'));
});
app.listen(3000);
