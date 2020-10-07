const express=require('express');
const path=require('path');
const router=express.Router();
const todos=require('.././util/todos');
const rootDir=require('.././util/path');
router.get('/',(req, res) => {
	console.log(todos);
    //res.send('<h1>Hello from Express!</h1>');
    //res.sendFile(path.join(__dirname, '../','views','shop.html'));
    res.sendFile(path.join(rootDir, 'views','shop.html'));

});

router.get('/display',(req, res) => {
	console.log(todos);
    //res.send('<h1>Hello from Express!</h1>');
    //res.sendFile(path.join(__dirname, '../','views','shop.html'));
    res.sendFile(path.join(rootDir, 'views','displaytodo.html'));

});

module.exports=router;