/*****************************************************************
 *  Connects to a MongoDB database, uses the Mongoose Schema,
 *  and creates and saves the data for three products.
 *****************************************************************/

const mongoose = require('mongoose');
const credentials = require("./credentials.js");

const dbUrl = 'mongodb://' + credentials.username +
    ':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

const connection = mongoose.createConnection(dbUrl);

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
        image: '/images/snowboards.jpg'
    });
    await product.save();
    
    product = new Product({
        id: 2,
        name: 'skis',
        description: 'Slice through the snow like a pro with our premium skis! Engineered for maximum speed, agility, and epic mountain adventures!',
        price: 700,
        quantity: 30,
        image: '/images/skis.jpg'
    });
    await product.save();

    product = new Product({
        id: 3,
        name: 'helmets',
        description: 'Protect your noggin and look cool doing it with our sleek helmets! Because safety never goes out of style on the slopes!',
        price: 25,
        quantity: 10,
        image: '/images/helmets.jpg'
    });
    await product.save();

    product = new Product({
        id: 4,
        name: 'jackets',
        description: 'Stay warm and stylish on the mountain with our cozy jackets! Designed to keep you snug as a bug while you shred!',
        price: 50,
        quantity: 10,
        image: '/images/jackets.jpg'
    });
    await product.save();

    product = new Product({
        id: 5,
        name: 'pants',
        description: 'From pristine peaks to powdery runs, our durable pants will keep you dry and comfortable all day long! Even if you take a tumble or two!',
        price: 35,
        quantity: 5,
        image: '/images/pants.jpg'
    });
    await product.save();

    product = new Product({
        id: 6,
        name: 'boots',
        description: 'Strap into comfort and performance with our high-performance boots! Because happy feet make for epic rides down the mountain!',
        price: 15,
        quantity: 25,
        image: '/images/boots.jpg'
    });
    await product.save();
    
    connection.close();
    process.exit();

});









