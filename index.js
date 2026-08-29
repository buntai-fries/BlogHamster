import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
let blogPost = "Sample Story.";

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/create", (req, res) => {
  res.render("sample-blog.ejs", { myEssay: "" });
});

app.post("/post-and-create", (req, res) => {
  blogPost = req.body["userPost"];
  res.redirect("/");
});

app.post("/read", (req, res) => {
  res.render("your-blog.ejs", { _userPost: blogPost });
});

app.post("/edit", (req, res) => {
  res.render("sample-blog.ejs", { myEssay: blogPost });
});

app.listen(port, () => {
  console.log(`The server port ${port} is running!`);
});
