'use strict';

const http = require('http');
const router = require('router-middleware')
    , app = router();


const ecstatic = require('ecstatic')({
  root: `${__dirname}/public`,
  showDir: true,
  autoIndex: true,
});

app.fileserver(ecstatic)

var presentation = 
  "I DONT KNOW \n" +
  "\n---\n" +
  "\nHow to deploy stuff"

app.get("/data.md", function(req, res, next){
	res.writeHead(200);
    return res.end(presentation);
});

const server = http.createServer(app);
server.listen(9001, function(){
    console.log("I am operating");
});
