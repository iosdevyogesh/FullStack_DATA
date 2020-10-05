const http = require('http');
let port = process.env.PORT || 3000;
const server=http.createServer((req, res) => {
    let url = req.url;
    let method = req.method;
    console.log(method);
    if ((url === '/')) {
        res.setHeader('content-type', 'text/html');
        console.log(`i am within ${url}`);
        res.write('<form action="/message" method="post">' +
            '<input type="text" name="message" value="enter some text here.."><br/>' +
            '<input type="submit" value="submit">' +
            '</form>');
        return  res.end();
    }
    if (url==='/message' &&url==='POST')
    {
        res.setHeader('content-type', 'text/html');
        res.write('<h1>welcome to my first post method</h1>')
        console.log(`i am within ${url}`);
        return res.end();
    }
    res.setHeader('content-type', 'text/html');
    res.write('<html><head><title>First Page.</title></head>');
    res.write('<body>welcome to my first node.js application');
    res.end();
});
server.listen(5000);