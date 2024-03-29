/*
	This REST API Controller is the controller for retrieving date from the database
  	and displaying  data into XML and JSON.
	
  	routes: 
		/rest/json/products
		/rest/xml/products
		/rest/json/products/{{product}}
		/rest/xml/products/{{product}}
		/rest/json/products/{{min_price}}/{{max_price}}
		/rest/xml/products/{{min_price}}/{{max_price}}
*/

const DB = require('../models/product.js');
const Product = DB.getProductModel();

/*
	****** REST API SECTION ******
	This section provides the following functionalities: 
  	1. get list of all products, and return JSON or XML
	2. get list of product by name, and return JSON or XML
	3. get list of all products within price range, and return JSON or XML
*/

// Get products and return JSON or XML
module.exports.getProducts = (req, res, next) => {
    var formatType = req.params.formatType.toLowerCase();
    
    // get all products from the database
    Product.find({}, (err, products) => {
        if (err) {
            console.log("Error : %s ", err);
            // Handle error and return response
            res.status(500).json({ error: "Internal server error" });
            return;
        }

        // Determine response type
        let contentType;
        let responseData;
        if (formatType === 'json') {
            contentType = 'application/json';
            responseData = JSON.stringify({ products }, null, '\t');
        } else if (formatType === 'xml') {
            contentType = 'application/xml';
            responseData = DB.getXmlProducts(products);
        } else {
            // Handle invalid formatType
            res.status(400).json({ error: "Invalid formatType" });
            return;
        }

        // Set response headers and send response
        res.setHeader('Content-Type', contentType);
        res.send(responseData);
    });
};


// Get by product name and return JSON or XML
module.exports.getProductByName = (req, res, next) => {
    var formatType = req.params.formatType.toLowerCase();
    var name = req.params.name;

    // Find a product by name
    Product.find({ name: name }, (err, products) => {
        if (err) {
            console.log("Error : %s ", err);
            // Handle error and return response
            res.status(500).json({ error: "Internal server error" });
            return;
        }

        // Determine response type and prepare response data
        let contentType;
        let responseData;
        if (formatType === 'json') {
            contentType = 'application/json';
            responseData = JSON.stringify({ products }, null, '\t');
        } else if (formatType === 'xml') {
            contentType = 'application/xml';
            responseData = DB.getXmlProducts(products);
        } else {
            // Handle invalid formatType
            res.status(400).json({ error: "Invalid formatType" });
            return;
        }

        // Set response headers and send response
        res.setHeader('Content-Type', contentType);
        res.send(responseData);
    });
};

// Get products by price range and return JSON or XML
module.exports.getProductByPriceRange = (req, res, next) => {
    var formatType = req.params.formatType.toLowerCase();
    var min = parseFloat(req.params.minimum); // Ensure min is parsed as a number
    var max = parseFloat(req.params.maximum); // Ensure max is parsed as a number

    // get products from the database by price range
    Product.find({ price: { $gte: min, $lte: max } }, (err, products) => {
        if (err) {
            console.log("Error : %s ", err);
            // Handle error and return response
            res.status(500).json({ error: "Internal server error" });
            return;
        }

        // Determine response type and prepare response data
        let contentType;
        let responseData;
        if (formatType === 'json') {
            contentType = 'application/json';
            responseData = JSON.stringify({ products }, null, '\t');
        } else if (formatType === 'xml') {
            contentType = 'application/xml';
            responseData = DB.getXmlProducts(products);
        } else {
            // Handle invalid formatType
            res.status(400).json({ error: "Invalid formatType" });
            return;
        }

        // Set response headers and send response
        res.setHeader('Content-Type', contentType);
        res.send(responseData);
    });
};
