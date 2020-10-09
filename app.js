const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/play-ground', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected successfully');
});
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: Date,
    isPublished: Boolean,
    price: Number
});
const Course = mongoose.model('Course', courseSchema);
async function getCourses() {
    return Course
        .find({isPublished: true})
        .or([
            {price: {$gte: 15}},
            // {name: /.*Course.*/i},
            {author:/.M./i}
        ])
        .sort('-price')
        .select('name author price');
}
async function run() {
    const courses = await getCourses();
    console.log(courses);
}
run().then(() => {
    console.log('success');
});