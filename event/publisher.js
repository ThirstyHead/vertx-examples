var eb = vertx.eventBus();

vertx.setPeriodic(1000, function (id) {
  // This handler will get called every second
  console.log('Publishing at: ' + new Date() );
  eb.publish("news-feed", "Greetings from publisher.js");
});



