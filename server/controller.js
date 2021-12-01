require('dotenv').config();
const {CONNECTION_STRING} = process.env;
const {movies, shows} = require("./data") 
const Sequelize = require("sequelize");

// const sequelize = new Sequelize(CONNECTION_STRING, {
//     dialect: "postgres",
//     dialectOptions: {
//         ssl: {
//             rejectUnauthorized: false
//         }
//     }
// });

module.exports = {
    seed: (req, res) => {
        // sequelize.query(``).then(() => {
        //     console.log('DB seeded!')
        //     res.sendStatus(200)
        // }).catch(err => console.log('error seeding DB', err))  
    },
    getMovies: (req, res) => {
        // sequelize.query(`SELECT * FROM movies`)
        // .then(dbRes => res.status(200).send(dbRes[0]))
        // .catch(err => console.log(err))
        res.status(200).send(movies)
    },
    getShows: (req, res) => {
        // sequelize.query(`SELECT * FROM shows`)
        // .then(dbRes => res.status(200).send(dbRes[0]))
        // .catch(err => console.log(err))
        res.status(200).send(shows)
    }
}