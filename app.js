
var pg =require('pg');
const options = {
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        database: 'api'
    }
}

const knex = require('knex')(options);

// knex.schema.createTable('make', (table) => {
//     table.increments('id')
//     table.string('name')
//     table.integer('price')
// }).then(() => console.log("table created"))
//     .catch((err) => { console.log(err); throw err })
//     .finally(() => {
//         knex.destroy();
//     });





// //const knex = require('knex')(options);

const cars = [
    { name: 'Audi', price: 52642 },
    { name: 'Mercedes', price: 57127 },
    { name: 'Skoda', price: 9000 },
    { name: 'Volvo', price: 29000 },
    { name: 'Bentley', price: 350000 },
    { name: 'Citroen', price: 21000 },
    { name: 'Hummer', price: 41400 },
    { name: 'Volkswagen', price: 21600 },
]

knex('make').insert(cars).then(() => console.log("data inserted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });




// const knex = require('knex')(options);

// knex.from('cars').select("*")
//     .then((rows) => {
//         for (row of rows) {
//             console.log(`${row['id']} ${row['name']} ${row['price']}`);
//         }
//     }).catch((err) => { console.log( err); throw err })
//     .finally(() => {
//         knex.destroy();
//     });
