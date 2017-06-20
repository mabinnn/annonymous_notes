// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, 'public/dist')));
// Setting our Views Folder Directory

//mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notessample');
mongoose.Promise = global.Promise;

//schema (blueprint)
var NoteSchema = new mongoose.Schema({
  biography: {type: String}
}, {timestamps: true} )
mongoose.model('NoteAn', NoteSchema);

var NoteAn = mongoose.model('NoteAn');


app.get('/', function(request, response){
  console.log("root route");
  // response.json(true);
})

// display all notes in the database
app.get('/allnotes', function(req, res){
  console.log("Getting all notes")
  NoteAn.find({})
  .then((data)=>{
    console.log("Accessing database: ");
    res.json(data)
  })
  .catch((err)=>{
    console.log("ERROR fetching database")
  })
})

//add new notes in the database
app.post('/addnew', function(req, res){
  console.log("Adding new to db! :", req.body);
  NoteAn.create(req.body)
  .then((data)=>{
    console.log("Adding", data);
    res.json(data)
  })
  .catch((err)=>{
    console.log("ERROR!", err)
  })
})



app.all("*", (req, res, next) =>{
  res.sendfile(path.resolve("./public/dist/index.html"))
})




app.listen(8000, function() {
    console.log("listening on port 8000");
})
