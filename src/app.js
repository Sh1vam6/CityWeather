const express=require('express');
const app=express();
const path=require("path");
const hbs=require('hbs')
const port=3000; 

const static_path=path.join(__dirname,"../public")
const template_path=path.join(__dirname,"../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")

app.set('view engine', 'hbs');
app.set('views',template_path)

hbs.registerPartials(partials_path)

app.use(express.static(static_path))

app.get("/",(req,res)=>{
    // res.send("welcome to home page")
    res.render('index')
})

app.get("/about",(req,res)=>{
    // res.send("welcome to about page")
    res.render('about')
})

app.get("/weather",(req,res)=>{
    // res.send("welcome to weather page")
    res.render('weather')
})

app.get("*",(req,res)=>{
    // res.send("ERROR 404 PAGE")
    res.render("404error",{
        errorMsg:"OOPS! Page not found,ERROR"
    })
})





app.listen(port,()=>{
    console.log(`server is running on port no ${port}`)
})