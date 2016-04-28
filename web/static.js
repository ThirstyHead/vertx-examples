var Router = require('vertx-web-js/router');
var StaticHandler = require('vertx-web-js/static_handler');

exports.vertxStart = function(){
  var server = vertx.createHttpServer();
  var router = Router.router(vertx);
  var port = 7777;

  router.route('/*')
        .order(99);
        .handler(StaticHandler.create().handle)


  server.requestHandler(router.accept).listen(port, function(){
  	console.log('Web server starting on port ' + port);
  });
}
