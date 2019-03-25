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



app.listen(8080, () => {
	console.log('Your app is running in port 8080');
});






