const Sequelize = require("sequelize")

const connection = new Sequelize("todo", "root", "zasdw", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = connection