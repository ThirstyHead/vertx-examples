def server = vertx.createHttpServer()
def port = 8081

server.requestHandler({ req ->
  req.response()
     .putHeader("content-type", "text/plain")
     .end("Hello World from Vert.x (and Groovy)!")
})

server.listen(port)
