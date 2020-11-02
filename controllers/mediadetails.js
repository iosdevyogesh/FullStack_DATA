const {Newsfeed} = require('../models/newsfeed');
const {Comments} = require('../models/comments');
const {Media} = require('../models/media');


exports.getComments = async (medias,userId,cb) => {
	let medmap =new Map();
	for (i=0;i<medias.length;i++) {
		console.log(medias[i]._id);
		let newsfeed = await Newsfeed.find({mediaId: medias[i]._id, userId: userId});
		let medcomments=[];
		for (j=0;j<newsfeed.length;j++) {
			let comments = await Comments.find({newsfeedId: newsfeed[j]._id});
			console.log("Inside comments push");
			medcomments.push(comments);
		}
		console.log("media set for"+medias[i]._id);
		console.log("media set for"+medcomments);
		medmap.set(medias[i]._id,medcomments);
	}
	
	
	cb(false,medmap);

    };
