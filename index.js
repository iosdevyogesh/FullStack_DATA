const http=require('http');
const customers=[
    {id:1,name:'John'},
    {id:2,name:'Marry'},
    {id:3,name:'Jane'},
]

const server=http.createServer(function(req,res){

    let url=req.url;
    console.log(url);
    if (req.url==="/")
    {
       res.write('<h1>home page for my app</h1>');
       res.end();
    }
    else if (req.url==='/api/customers')
    {
        res.write(JSON.stringify(customers));
        res.end();
    }
    else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h3>no page found</h3>');
        res.end();
    }

});
const port =  3000;
server.listen(port, () => console.log(`Listening on port ${port}...`));