
const morgan = require('morgan');
const {json, urlencoded} = require('body-parser');
const methodOverride = require('method-override');
const errorhandler = require('errorhandler');
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(serve-favicon());
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/tests')));

// development only
if ('development' == app.get('env')) {
  app.use(errorhandler());
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});