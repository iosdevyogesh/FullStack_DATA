const Joi=require('joi');
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
//path variable(:id)
app.get('/api/generes/:id', (req, res) => {
    let id=parseInt(req.params.id);
    const genre = generes.find(c => c.id === id);
    if (!genre)
        return res.status(404).send(`The genre with the ID ${id} was not found.`);

    // res.send(`the genere with ID ${id} found${genre}`);
    res.send(genre);


});
app.get('/api/generes1/:name', (req, res) => {
    let id=parseInt(req.params.name);
    const genre = generes.find(c => c.id === id);
})


app.post('/api/generes', (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = {
        id: generes.length + 1,
        name: req.body.name
    };
    generes.push(genre);
    res.send(genre);
});


let port=process.env.PORT || 3000;
app.listen(port, function(){
    console.log('server started listening on port number',port);
});

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(5).required()
    };

    return Joi.validate(genre, schema);
}