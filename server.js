var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var todoRoutes = require('./todo-routes');
var port = process.env.PORT || 3000;

app.use(bodyParser());
app.use(express.static(__dirname + "/public"))
app.use('/api', todoRoutes);


app.listen(port, function(){
  console.log('You connected to the port:' + port);
});
