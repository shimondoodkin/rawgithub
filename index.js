var http = require('http');
var url = require('url');
var mime = require('mime');
var request = require('request');

var remoteUrl = process.env.GIT_PROXY_DEST;
if (remoteUrl === undefined) {
    remoteUrl = 'https://raw.github.com';
}


http.createServer(function (req, res) {
    console.log(remoteUrl+req.url);
	request(remoteUrl+req.url, function (error, response, body) {
	  	res.writeHead(response.statusCode, {'Content-Type': mime.lookup(req.url,'text/html')+';charset=utf-8'});
		res.end(body);
	});
}).listen(6617, '0.0.0.0');
console.log('Github Server running at http://0.0.0.0:6617/. Proxying to '+remoteUrl);