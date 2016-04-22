HttpServer server = vertx.createHttpServer();
int port = 8082;

server.requestHandler(request -> {
  // This handler gets called for each request
  HttpServerResponse response = request.response();
  response.putHeader("content-type", "text/plain");

  // Write to the response and end it
  response.end("Hello World!");
});

server.listen(port);
