const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/play-ground',{ useNewUrlParser: true , useUnifiedTopology: true} )
    .then(function(){
        console.log('Connected to Mongo');
    })
    .catch(reason => {
        console.log('Connection is not Unsuccessful..!',reason.message);
    })

const studentSchema=new mongoose.Schema(
    {
        firstName:String,
        lastName:String,
        email:String,
        doj:{type: Date,default:Date.now()}
    });

const Student=mongoose.model('Student',studentSchema);
/*
let student=new Student({
    firstName: 'Sachin',
    lastName: 'Tendulkar',
    email: 'sachin@email.com',
    doj: new Date(2020,2,12)
});
async function createStudent()
{
    let result = await student.save();
    console.log(result);
}
createStudent().then(function (){
    console.log('Student created: ');
}).catch(error => {
    console.log('Error creating student:',error.message);
});
*/
async function getStudents()
{
    let result = await Student.find();
    console.log('displaying students',result);
    console.log('called getStudents()');
}

async function run()
{
    getStudents().then(function(){
        console.log('called run function');
    }).catch(error => {
        console.log(error.message);
    })
}
run().then(function () {
    console.log('finished running');

}).catch(error => {
    console.log(error.message);

});