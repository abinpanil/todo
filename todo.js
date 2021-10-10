
const express = require("express")

let newlists = []
const app = express()
app.set('view engine', "ejs")
app.use(express.static(__dirname+"/public"))
app.use(express.urlencoded({extended:true}))
app.get("/",function(req,res){
    
    var today = new Date()
    
    var options = {
        weekday:'long',
        month:'long',
        day:'numeric'
    }
    var day = today.toLocaleDateString('en-US', options)
    res.render("list",{changeDay:day, addlists:newlists})
   
})
app.post("/",function(req,res){
    var newlist = req.body.new_list
    newlists.push(newlist)

    res.redirect("/")
})
app.listen(4000, function(){
    console.log("Started")
})