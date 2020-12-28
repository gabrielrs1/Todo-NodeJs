const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/db")
const Todos = require("./database/Todo")

connection
    .authenticate()
    .then(() => {
        console.log("Database OK")
    })
    .catch(error => {
        console.log(error)
    })

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    Todos.findAll({raw: true}).then(todo => {
        res.render("index", { todo })
    })
})

app.post("/save", (req, res) => {
    var item = req.body.todo
    Todos.create({
        item: item
    }).then(() => {
        res.redirect("/")
    })
})

app.post("/delete", (req, res) => {
    var id = req.body.id
    Todos.destroy({
        where: {
            id
        }
    }).then(() => {
        res.redirect("/")
    })
})

app.listen(3000, () => {
    console.log("Server loaded")
})