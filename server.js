
var express = require("express");
var adminRoutes = require("./routes.js")
var userRoutes = require("./userroutes.js")
 
const app = express();
 
app.use('/admin',adminRoutes )
 
app.use('/user',userRoutes)
 
app.use(function(req,res,next){
    console.log("Middleware called " + req.method +  req.url);
    next();
 
})

//Template Engine - EJS
app.set('views', './views')
 
app.set('view engine','ejs') //localhost:8087/admin/home
//app.METHOD(PATH, HANDLER)
app.get('/',(req,res) =>{
    res.send("Hello from Home page")
});
 
app.get('/about', (req,res)=>{
    res.send("Hello from about page")
});
app.get('/search', (req,res)=>{
    res.send("Hello from search page")
});
 
// app.get('/listOfStudents', (req,res)=>{
//     res.send("here the list of students")
// });
 
// app.sdelete('/listOfStudent', (req,res)=>{ // /about:path or routing path or end poinds
//     res.send("Deleted")
// });
 
 
app.listen(8086, function(){
    console.log("server started")
});