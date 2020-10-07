const bodyParser=require('body-parser');

const express=require('express');
const path=require('path');
const app = express();
app.use(express.static('public'));


app.use(bodyParser.urlencoded({extended: false}));

const adminRoutes=require('./route/admin');

const shopRoutes=require('./route/shop');
const rootDir=require('./util/path');
app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use('/', (req, res, next)=>{
    //path dirname
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});


app.listen(3000,(() => {

    console.log('listening on http://localhost:3000');

}))

