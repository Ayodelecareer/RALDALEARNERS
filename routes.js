var express = require("express");
const signups=require("./mongodb")
const app=express()

var router =  express.Router();

router.get("/", function(req,res){
        console.log("Hello I am on the start page Here");
        res.render("index");
    });

    router.get("/home", function(req,res){
        res.render("home");
    });
    
    router.get("/about", function(req,res){
        res.render("about");
    });

    router.get("/login", function(req,res){
        res.render("login");
    });

    router.get("/signup", function(req,res){
        res.render("signup");
    });

    router.get("/learn", function(req,res){
        res.render("learn");
    });

    app.post("/signup",async (req,res)=>{

        const data={
        email:req.body.email,
        password:req.body.password
        }
        
        await signups.insertMany([data])
        
        res.render("home")
        
        })
        

    

module.exports = router;