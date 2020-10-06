const express=require('express');
const app=express();
app.use(express.json());
let generes=[
    {id:1,name: 'Action'},
    {id:2,name: 'Thriller'},
    {id:3,name: 'Romance'}
];
app.get('/api/generes', (req, res) => {
    res.send(generes);

});
app.post('/api/generes', (req, res) => {


});
let port=process.env.PORT || 3000;
app.listen(port, function(){
    console.log('server started listening on port number',port);
})