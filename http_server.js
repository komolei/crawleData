// const http = require('http');
// http.createServer((req,res)=>{
//     res.setHeader('Content-Type','text/plain')
//     res.writeHead(200,'it is ok');
//     res.end('xxxxxxxxx');
// }).listen(4000);

const http = require('http')
const server = http.createServer();
server.listen(3000);

const qs = require('querystring')
// let count=0;
server.on('request', (req, res) => {
    // count++;
    // console.log('count is',count);
    const url = req.url;
let resStr;

const query = qs.parse(url.substr(url.indexOf(`?`)+1,url.length));

console.log('query is',query);
    res.statusCode = 200;
if (url.indexOf('/hello')>-1) {
    resStr = 'hello world';
    if(query.yourname=='22'){
        resStr='you are little'
    }
} else {
    resStr = 'no hello'
}
res.end(resStr)
})