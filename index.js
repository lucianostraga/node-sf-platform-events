var jsforce = require('jsforce');

var username = 'USER_NAME';
var password = 'PASS+TOKEN';

var conn = new jsforce.Connection({});
conn.login(username, password, function(err, userInfo) {
  if (err) { 
    return console.error(err); 
  }
  conn.streaming.topic("/event/ChatterActivity__e").subscribe(function(message) {
    console.log(message);
  });
});