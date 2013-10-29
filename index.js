var http = require('http');
var url = require('url');
var mime = require('mime');
var request = require('request');

http.createServer(function (req, res) {
    console.log('http://raw.github.com'+req.url);
	request('https://raw.github.com'+req.url, function (error, response, body) {
	  	res.writeHead(response.statusCode, {'Content-Type': mime.lookup(req.url,'text/html')+';charset=utf-8'});
		res.end(body);
	});
}).listen(6617, '127.0.0.1');
console.log('Github Server running at http://127.0.0.1:6617/');