const http = require('http');
const fs = require('fs');
const port = '3000';

const server = http.createServer((req,res)=>{
	res.writeHead(200, {'Content-Type':'text/html'});
	if(req.url === '/' || req.url === '/home'){
		fs.readFile('./index.html',null,(err,data)=>{
			if(err){
				res.writeHead(404);
				res.write('File not Found');
			}else{
				res.write(data);
			}
			res.end();
		})
	}

	if(req.url === '/about'){
		fs.readFile('./about.html',null,(err,data)=>{
			if(err){
				res.writeHead(404);
				res.write('File not Found');
			}else{
				res.write(data);
			}
			res.end();
		})
	}

	if(req.url === '/contact'){
		fs.readFile('./contact.html',null,(err,data)=>{
			if(err){
				res.writeHead(404);
				res.write('File not Found');
			}else{
				res.write(data);
			}
			res.end();
		})
	}
})


server.listen(port);

console.log(`Listening of port ${port}`);