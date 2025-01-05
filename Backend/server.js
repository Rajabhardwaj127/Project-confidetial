const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const {connectToMongoDB} = require("./connect");
const {restrictToLoggedinUserOnly} = require("./middlewares/auth");
const userRoute = require("./routes/user");
const PORT = 8000;

connectToMongoDB("mongodb+srv://rajabhardwaj127:hemlata.satish1977@cluster0.y7htk.mongodb.net/confidential")
.then(() => {
  console.log('MongoDB connected');
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


app.use(express.static(path.join(__dirname, "../")));
app.use("/user",userRoute)

app.set("view engine", "ejs");
app.set("views", path.resolve("./backend/views"));





app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
})

app.get("/bagpack", (req, res) => {
  res.sendFile(path.join(__dirname, "../Bagpack/bagpack.html"));
});


app.get("/login", (req, res) => {
  res.render("index");
});

app.get("/forgot" , (req,res) => {
  res.render("forgot")
})

app.get("/register" , (req,res) =>{
  res.render("register")
})


app.get("/contact",(req,res) => {
  res.sendFile(path.join(__dirname, "../Contact-Us/contact-index.html"));
})

app.get("/product/product-1" , (req,res)=> {
  res.sendFile(path.join(__dirname, "../Product/product-1.html"));
})

app.get("/cart", (req,res) => {
  res.sendFile(path.join(__dirname, "../cart/cart.html"));
})



// app.get("/" ,(req,res) => {
//     res.sendFile(path.resolve("./index.html"));
// })

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}/`);
})