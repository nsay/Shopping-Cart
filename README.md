# Shopping Cart
 
This is a simple Shopping Cart website modeled after a ski resort shop. This is made with the following technologies:
- Node.js
- Express
- Handlebars (for view templates)
- MongoDB (NoSQL database)
- ​Passport.js (for authentication)
- bcrypt (for securely storing the user passwords)

## Instructions:

#### Required Setup and Installs
1. Make sure you install NodeJS and MongoDB.

2. On my local machine, I have the following installed:
    - [NodeJS v18.19.0](https://nodejs.org/en/download)
    - [MongoDB Community Edition v7.0.2](https://www.mongodb.com/try/download/community) 
    - **Optional:** I am using [Studio3T](https://studio3t.com/download/) as my MongoDB GUI.

3. Start your MongoDB instance
    - Run ```brew services start mongodb-community```
    - Run ```mongosh```
    - Run ```brew services stop mongodb-community```

4. In your MongoDB GUI or CLI, please create the following:
    - Create a new database called ```shopping_cart```
    - Create a user the below user with said permissions to this database.
      - User: ```user``` 
      - Password: ```secret```
      - Permissions: ```read/write permissions``` 


#### Project Install
1. Open this root folder in your CLI, and and run ```​npm install``` ​to install the node packages.

2. Run ```node populate_database.js``` to populate the database.

3. Run ```node server.js``` to start the project.

4. Go to ```http://localhost:3000``` in your web browser.
