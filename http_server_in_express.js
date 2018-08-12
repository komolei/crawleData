const http = require('http');
const express = require('express');
const app = express()


const auth = (req, res, next) => {
    if (req.query.name == 'komolei') {
        // res.end('22')
        next();
    } else {
        next('go away') // next 中的参数会被当成err被捕捉
    }
}

app.use(auth)

app.use((req, res, next) => {
    console.log(1);
})
app.use((req, res) => {
    res.end('hello world');
})
// error middleware 错误中间件

app.use((err,req,res,next)=>{  // 根据参数的不同，来分为普通中间件还是错误中间价
    res.end(err);
})

const server = http.createServer(app)
server.listen(4000);