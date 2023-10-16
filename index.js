const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"))

app.set("view engine", "ejs");
app.set("views", "./views");

//build in Middleware
app.use(express.json()),
app.use(express.urlencoded({
    extended: false
}))


app.use(router);

app.listen(port, ()=> {
    console.log(`server berjalan di port ${port}`)
});
