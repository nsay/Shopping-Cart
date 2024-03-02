/*
  Connects to a MongoDB database, uses the Mongoose Schema,
  and creates and saves the data for six products.
*/

const mongoose = require('mongoose');
const credentials = require("./credentials.js");

const dbUrl = 'mongodb://' + credentials.username +
    ':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

const connection = mongoose.createConnection(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const ProductDb = require('./models/product.js');
const Product = ProductDb.getProductModel(connection);

connection.on("open", async () => {

    // create and save document objects
    let product;
    product = new Product({
        id: 1,
        name: 'snowboards',
        description: 'Ride the slopes in style with our top-notch snowboards! Guaranteed to turn heads and carve fresh powder like a boss!',
        price: 500,
        quantity: 80,
    });
    await product.save();
    
    product = new Product({
        id: 2,
        name: 'skis',
        description: 'Slice through the snow like a pro with our premium skis! Engineered for maximum speed, agility, and epic mountain adventures!',
        price: 700,
        quantity: 30,
    });
    await product.save();

    product = new Product({
        id: 3,
        name: 'helmets',
        description: 'Protect your noggin and look cool doing it with our sleek helmets',
        price: 25,
        quantity: 10,
    });
    await product.save();

    product = new Product({
        id: 4,
        name: 'jackets',
        description: 'Stay warm and stylish on the mountain with our cozy jackets',
        price: 50,
        quantity: 10,
    });
    await product.save();

    product = new Product({
        id: 5,
        name: 'pants',
        description: 'From pristine peaks to powdery runs, our durable pants will keep you dry and comfortable all day long',
        price: 35,
        quantity: 5,
    });
    await product.save();

    product = new Product({
        id: 6,
        name: 'boots',
        description: 'Strap into comfort and performance with our high-performance boots',
        price: 15,
        quantity: 25,
    });
    await product.save();
    
    connection.close();
    process.exit();

});









