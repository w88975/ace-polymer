var express=require('express');
var cwd = process.cwd();
var app=express();
var serveStatic = require('serve-static');
app.use('/ace', serveStatic('ace'));
app.use('/test', serveStatic('test'));
app.use('/bower_components', serveStatic('bower_components'));
app.get('/', function(req, res){
    res.sendFile( cwd + '/test/demo.html' );
});
app.listen(3000);
console.log('listen to port: http://127.0.0.1:3000');
