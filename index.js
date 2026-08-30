import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const posts = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { allPosts: posts });
});

app.get("/create", (req, res) => {
  res.render("sample-blog.ejs", { myEssay: "" });
});

app.post("/post-and-create", (req, res) => {
  const newPost = {
    title: req.body.postTitle,
    content: req.body.userPost,
  };
  posts.push(newPost);
  res.redirect("/");
});

app.get("/read/:postName", (req, res) => {
  const requestedTitle = req.params.postName;
  const foundPost = posts.find((post) => post.title === requestedTitle);
  res.render("your-blog.ejs", { specificPost: foundPost });
});

app.get("/edit/:postName", (req, res) => {
  const requestedTitle = req.params.postName;
  const foundPost = posts.find((post) => post.title === requestedTitle);
  res.render("sample-blog.ejs", { myEssay: foundPost });
});

app.listen(port, () => {
  console.log(`The server port ${port} is running!`);
});
