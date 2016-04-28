var Router = require('vertx-web-js/router');

exports.vertxStart = function(){
  var server = vertx.createHttpServer();
  var router = Router.router(vertx);
  var port = 7777;

  var route = router.route();
  route.handler(function (routingContext) {
	  // This handler will be called for every request
	  console.log('INCOMING REQUEST');
	  routingContext.next();
  });
  route.order(-1);


  server.requestHandler(router.accept).listen(port, function(){
  	console.log('Traffic logger starting on port ' + port);
  });
}
