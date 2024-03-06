
import express from "express";//use module based to import the express

const app = express();
const port = 3000;


app.use(express.static("public"))//use express middle ware make it static content displayed in the ejs

app.get("/",(req,res)=>{
  res.render("index.ejs");
})
app.get("/about",(req,res)=>{
  res.render("about.ejs")
})
app.get("/contact",(req,res)=>{
  res.render("contact.ejs")
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
