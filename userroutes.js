var express = require('express')
var router = express.Router();
router.get('/Home',function(req,res){
    res.send("Get routes on user")
})
 //router.get('/loginPage',function(req,res){
 //    res.send("this is your login page")
 //});
 
module.exports = router;