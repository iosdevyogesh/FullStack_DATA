const express=require('express');
const path=require('path');
const router=express.Router();
const rootDir=require('.././util/path');
const Joi=require('joi');
const todos=require('.././util/todos');
/*
let todos=[
 {todoid:1,name: 'test',status: "yes"},
];
*/

router.get('/add-todo',(req, res) => {

   /* res.send('<form action="/admin/product" method="post">' +

        '<input type="text" name="title"><br/>' +

        '<input type="submit" value="add product"></form>');*/
        res.sendFile(path.join(rootDir, 'views','add-todo.html'));

});


router.get('/todo:id',(req, res) => {


    const todo = todos.find(c => c.id === req.params.id);

    if (!todo) return res.status(404).send('The todo with the given ID was not found.');



    const { error } = validateTodo(req.body);


    if (error) return res.status(400).send(error.details[0].message);

    console.log(todo.name);

    todo.name = req.body.name;

    console.log(todo.name);

    res.send(todo);
   /* res.send('<form action="/admin/product" method="post">' +

        '<input type="text" name="title"><br/>' +

        '<input type="submit" value="add product"></form>');*/
        res.sendFile(path.join(rootDir, 'views','add-todo.html'));

});


router.post('/add-todo',(req, res) => {

    console.log(req.body);


    const { error } = validateTodo(req.body);

    if (error) return res.status(400).send(error.details[0].message);
    let st=req.body.status;

    if(!st)
    	st="off";

const todo={

    //id:generes.length+1,
    todoid:req.body.todoid,

    name:req.body.name,
    status:st,

};

todos.push(todo);

//res.send(todos);

    res.redirect('/');

});


function validateTodo(todo) {

    const schema = {

        name: Joi.string().min(5).required(),
        todoid: Joi.number(),
        status: Joi.string()
        

    };



    return Joi.validate(todo, schema);

}

module.exports = router;
