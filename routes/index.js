var express = require('express');
var router = express.Router();
var fs=require('fs');
/* GET home page. */
router.post('/', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
   fs.readFile("public/content.txt","utf-8",function(err,data){
   	console.log(data)
       var str=JSON.parse(data);
       str.push({name:req.body.name,con:req.body.con});
//     console.log(str);
       fs.writeFile('public/content.txt',JSON.stringify(str),function(err){
           fs.readFile("public/content.txt","utf-8",function(err,data){
               var data=JSON.parse(data);
               res.send({name:data})
           })
       })
   })
});
 module.exports = router;
