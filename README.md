# NodeJS implementation for consuming Platform Events with jsforce library

[JS Force](https://jsforce.github.io/).

Could be run locally or on Heroku

Index.js

```JavaScript
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
```

