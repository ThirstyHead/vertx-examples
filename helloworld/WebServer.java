import io.vertx.core.AbstractVerticle;
public class WebServer extends AbstractVerticle {
  private HttpServer server;
  private int port;

  public WebServer(){
    server = vertx.createHttpServer();
    port = 8082;
  }

  public void start() {
    server.requestHandler(req -> {
      req.response()
         .putHeader("content-type", "text/plain")
         .end("Hello from Vert.x!");
    });

    server.listen(port);
  }
}
