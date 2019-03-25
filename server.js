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
	author: " Daniel",
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




app.listen(8080, () => {
	console.log('Your app is running in port 8080');
});






