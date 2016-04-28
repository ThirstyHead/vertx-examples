var Router = require('vertx-web-js/router');

exports.vertxStart = function(){
  var server = vertx.createHttpServer();
  var router = Router.router(vertx);
  var port = 7777;

  router.route('/hello').handler(function(routingContext) {
	  var response = routingContext.response();
	  response.putHeader("content-type", "text/html");
	  response.end('<h1>Hello</h1>');
  });
  
  server.requestHandler(router.accept).listen(port, function(){
  	console.log('Hello server starting on port ' + port);
  });
}
