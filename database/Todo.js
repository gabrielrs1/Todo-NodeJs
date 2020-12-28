const Sequelize = require("sequelize")
const connection = require("./db")

const Todos = connection.define("itemtodo", {
    item: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Todos.sync({force: false}).then(() => {})

module.exports = Todos