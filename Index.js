const route = require('./routes/vidlyRoute');
const route2=require('./routes/global');
const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
app.use('/api/genres', route);
app.use(route2);
mongoose.connect('mongodb://localhost:27017/vidly', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connection established with mongodb');
    }).catch(reason => {
    console.log('connection failed', reason.message);
});
app.listen(3000, () => {
    console.log('listening on port number 3000');
})