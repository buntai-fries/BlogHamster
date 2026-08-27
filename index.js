import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/post-and-create", (req, res) => {
  res.render("sample-blog.ejs", { _userPost: req.body["userPost"] });
});

app.listen(port, () => {
  console.log(`The server port ${port} is running!`);
});
