var server = vertx.createHttpServer();
var port = 8080;

server.requestHandler(function (request) {
  // This handler gets called for each request
  var response = request.response();
  response.putHeader("content-type", "text/plain");

  // Write to the response and end it
  response.end("Hello World from Vert.x (and JavaScript)!");
});

server.listen(port);
