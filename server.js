const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const uuidv4 = require('uuid/v4')

const jsonParser = bodyParser.json();
var a = new Date("2015-03-25");
var b = new Date("2016-04-25");
var c = new Date("2017-06-25");
var d = uuidv4();
var e = uuidv4();
var f = uuidv4();


let blogArray = [
					{
	id: d ,
	title: "Learn to cook in 7 days",
	content: "Article 1",
	author: "Daniel",
	publishDate: a
					},
					{
	id: e,
	title: "Learn to code in 7 days",
	content: "Article 2",
	author: "Maxwel",
	publishDate: b
					},
					{
	id: f,
	title: "Learn to translate in 7 days",
	content: "Article 3",
	author: "Daniel",
	publishDate: c
					}
				];

	app.get('/blog-posts', (req, res) => {
	res.status(200).json({
		message : "Successfully sent the list of blogs",
		status : 200,
		sports : blogArray
	});
});			

app.get('/blog-posts/:author', (req, res) => {
	if(req.params.author){
	let Tauthor = req.params.author;
	let Blogs = [];
	let empty = true;
 
	blogArray.forEach(item => {
		if (item.author == Tauthor){
			empty = false;
			Blogs.push(item);
		}
	});
	if(empty){
	res.status(404).json({
		message : "Author not found in the list",
		status : 404
	});
	}
else
	res.status(200).json({
				message : "Successfully sent the blog by the author",
				status : 200,
				Blogs : Blogs
			});

	
} else
res.status(404).json({
		message : "No author sent",
		status : 404
	});


});	

//post
app.post('/post-blog', jsonParser, (req, res, next) => {
	
	let requiredFields = ['title', 'content','Author','Date'];

	for ( let i = 0; i < requiredFields.length; i ++){
		let currentField = requiredFields[i];

		if (! (currentField in req.body)){
			res.status(406).json({
				message : `Missing field ${currentField} in body.`,
				status : 406
			}).send("Finish");
		}
	}
	var H = uuidv4();

	let objectToAdd = {
			id: H,
			title: req.body.title,
			content: req.body.content,
			author: req.body.Author,
			publishDate: req.body.Date
	
	};

	blogArray.push(objectToAdd);
	res.status(201).json({
		message : "Successfully added the blog",
		status : 201,
		sport : objectToAdd
	});
});

//

app.delete('/delete-blog/:id',jsonParser,(req,res) =>{
if(req.params.id){
let Id1 = req.params.id;
let requiredFields = ['id'];
 for (let i=0; i<requiredFields.length; i++)
 {
 	let currentField = requiredFields[i];

 	if(!(currentField in req.body)){

	res.status(400).json({
		message: " Mising iD",
		status: 400
		});

 	}


 }

 let Id2 = req.body.id;

if (Id1 == Id2){
 blogArray.forEach((item,index) =>{
 	if (item.id == Id1){
 		blogArray.splice(index,1)
	res.status(202).json({
		message: " object deleted",
		status: 202
		});
 	}


 });
}
else
	res.status(400).json({
		message: "parameters dont match",
		status: 400
		});

res.status(404).json({
		message: "object not found",
		status: 404
		});

}
else
res.status(406).json({
		message: "mising argument",
		status: 406
		});

});





//Listen
app.listen(8080, () => {
	console.log('Your app is running in port 8080');
});






