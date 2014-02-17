console.log('');
console.log('-------------------------------------------');
console.log('       STARTING Cruity Placeholder SERVER');
console.log('-------------------------------------------');
console.log('');

var express = require('express');
var app = express();

app.configure(function() {
  app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
  app.use(express.bodyParser());
});


//Static pages
app.use('/', express.static(__dirname + '/public'));

app.listen(80);
console.log('Listening on port 80...');
