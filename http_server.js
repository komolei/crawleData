const http = require('http')
const server = http.createServer()

server.listen(3000)
const qs = require('querystring')
let resStr, count;
let users = [];
server.on('request', (req, res) => {
    const url = req.url;
    const path = url.substring(0, url.indexOf(`?`))
    const query = url.substr(url.indexOf(`?`) + 1, url.length)
    const params = qs.parse(query);
    console.log('params', params);
    res.statusCode = 200;
    const method = req.method;
    const contentType = req.headers['content-type']
    console.log(url, contentType);
    switch (path) {
        case `/hello`:
            switch (method) {
                case  `GET`:
                    resStr = `hello world get method`
                    break;
                case `POST`:

                    let resBody = '';
                    req.on('data', data => {
                        resBody += data.toString();
                        console.log('data',resBody);

                    })
                    req.on('end', () => {
                        if (contentType == `application/x-www-form-urlencoded`) {
                            resStr = JSON.stringify(resBody);
                        } else {
                            res.statusCode = 400;
                            resStr = `error `
                        }
                    })

            }
            res.end(resStr)
            break;
        case `/hi`:
            res.end(resStr)
            resStr = `hi my heart`
        default:
            res.statusCode = 500;
            res.end('this service can\'t handle it')
    }

})