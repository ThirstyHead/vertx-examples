exports.vertxStart = function(){
  var eb = vertx.eventBus();

  var consumer = eb.consumer('news-feed');

  // called once per message
  consumer.handler(function(message){
      console.log('Received news: ' + message.body() );
  });

  // called once upon successful registration
  consumer.completionHandler(function (res, res_err) {
    if (res_err == null) {
      console.log("The 'news-feed' handler registration has reached all nodes");
    } else {
      console.log("Registration failed!");
    }
  });

  // called once upon successful UNregistration
  consumer.unregister(function (res, res_err) {
    if (res_err == null) {
      console.log("The 'news-feed' handler un-registration has reached all nodes");
    } else {
      console.log("Un-registration failed!");
    }
  });  
}
