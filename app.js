var express = require('express');
var jsdom = require('jsdom');
$ = require('jquery')(new jsdom.JSDOM().window);
var cors = require("cors");
var app= express();
// var document = $;
// const axios = require('axios');
// const cheerio = require('cheerio');
// const request = require('request');
var d;
app.use(cors());
var api="http://10.10.4.136:3000/";

var sulapi ="http//:10.10.4.132:5000/hello/187";

app.get("/",function(req,res){
 function maddy(){
     
       $.get(api,function(data){  
           if(data !=undefined)          
            if(data){
               d =data;
             }
        })
    }
maddy();
    console.log(d)
    res.json("hai"+" "+d)
})    

app.get("/",function(req,res){
    function maddy(){
        
          $.get(api,function(data){  
              if(data !=undefined)          
               if(data){
                  d =data;
                }
           })
       }
   maddy();
       console.log(d)
       res.json("hai"+" "+d)
   })    

app.listen(3000);


