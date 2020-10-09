//Local connection for mogodb
const mongoose = require('mongoose');
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

mongoose.connect('mongodb://localhost:27017/play-ground?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function(){
        console.log('connected to Mongodb');
    }).catch(err =>{
    console.log('error connecting to Mongodb',err.message);
})

const podSchema= new mongoose.Schema(
    {
        name: String,
        age: Number,
        status: String,
        groups: [String]
    });


const Pods = mongoose.model('Pods',podSchema);



async function createPod(name,age,status,groups) {
    let pod = new Pods();
    pod.set({name:name});
    pod.set({age:age});
    pod.set({status:status});
    pod.set({groups:groups});

    let result = await pod.save();
    console.log(result);
}
async function createPods(){
    let answers = [];
    r1.question('name? age? status? groups?',answer=>{
        answers=answer.split(',');
        createPod(answers[0],answers[1],answers[2],answers[3].split(' '));
        r1.close();
    })
}

async function getPods() {
    let result = await Pods.find().sort({name:-1});
    console.log('Display Pods'+ result);
}


async function findPodbyId(id) {
    await Pods.findById(id).then(function (result) {
        console.log('Display Pod details with Id '+ result);
    })
        .catch(error => {
            console.log('Pod not found');
        })

}

async function findPodbyStatus(status) {
    await Pods.find({status: status}).then(function (result) {
        console.log('Display Pod details with status'+ result);
    })

        .catch(error => {
            console.log('Pod not found');
        })

}
async function findPodsgreaterthanAge(conditionAge) {
    await Pods.find({age: { $gte: conditionAge }}).sort({age:-1}).then(function (result) {
        console.log('Display Pods with Age Condition'+ result);
    })

        .catch(error => {
            console.log('Course not found');
        })

}

async function updatePods()
{
    //it updates all record
    const result = await Pods.updateMany({ status: 'D' }, {
        $set: { name: 'Sprint ',groups: ['test','test2']}
    });
    console.log('pod update success');
}
async function updatetestPod()
{
    //it updates only first record
    const result = await Pods.update({ status: 'D' }, {
        $set: { name: 'Spring'}
    });
    console.log('pod update success');
}


//update first
async function updatePod(id)
{
    let pod = await Pods.findByIdAndUpdate({_id: id}, {
        $set: {name: 'testing', status: 'E'}
    },{new:false});
    console.log(pod);
}

async function removePod(id){
    const pod=Pods.deleteOne({ _id: id },()=>{
        console.log(pod);
        console.log('pod deleted');
    });

}

async function removePods(status){

    const result = await Pods.deleteMany({status:status});
    console.log(result);
}



async function run()
{

    createPods();
    //await getPods();
    // await findPodbyId('5f802c6e11db05692c16f166');
    //await findPodbyStatus('D');
    //await findPodsgreaterthanAge(15);


    //update multiple courses
    /* updatePods().then(() =>{
         console.log('success');
     });
 */
    //update one course
    updatetestPod().then(() =>{
        console.log('success');
    });
    //update pod by ID with return others return void
    /*updatePod('5f802c6e11db05692c16f166').then(() => {
        console.log('success');
    })*/
    //removePod('5f802c359e2e625308dbb8a3');
    //removePods('C');
}

run().then(function (){
    console.log('run executed');
}).catch(error=> {
    console.log('run failed'+error);
});