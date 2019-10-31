
var express = require('express');

var app = module.exports = express();

app.use(require('prerender-node')
  .set('prerenderServiceUrl', 'http://localhost:3000/render?url='));
app.use(express.static("public"));

// This will ensure that all routing is handed over to AngularJS 
app.get('*', function (req, res) {
  res.sendfile('./public/index.html');
});

app.listen(4000);
console.log("Go Prerender Go at http://localhost:4000 !");
