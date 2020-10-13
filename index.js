const express=require('express');
const app = express();
const Joi=require('joi');
const bodyParser=require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'pug');

app.set('views','views');
const users=[];


app.get('/', (req, res, next) => {
    res.render('index', { pageTitle: 'Add User' });
});



app.get('/users', (req, res, next) => {

    res.render('users', {
        titleView:'Users', users:users
    });
});



app.post('/add-user', (req, res, next) => {
    console.log(req.body.uname);
    const { error } = validateUser(req.body);

    if (error) {
        res.render('error', {
            titleView:'Users', errormsg:error.details[0].message
        });
        return;
    }

    //res.status(400).send(error.details[0].message);

    users.push({uname:req.body.uname});
    res.redirect('/users');

});




app.listen(3000,(() => {

    console.log('listening on http://localhost:3000');

}))

function validateUser(user) {
    const schema = {
        uname: Joi.string().min(5).required(),
    };
    return Joi.validate(user, schema);
}