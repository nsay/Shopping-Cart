/*
  We use Passport.js for our middleware authentication system.
  This will also help us with data persistence and keeping the user logged in.
*/

const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const userDb = require('../models/user.js');
const User = userDb.getUserModel();


module.exports = function(passport) {
  /*
      1.  Find user
      2.  Verify if user's encrypted salted pass aka unique hash is in database
      3a. If found, return user
      3b. If not found, return error
  */
    passport.use(
        new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
            // find a user 
            User.findOne({ email: email }) 
                .then(user => {
                    if (!user) {
                        return done(null, false, {message: 'That email address was not found!'});
                    }
                    // verify the pass entered in the form with the users salted pass in the database
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;
                        
                        // if a match was found
                        if (isMatch) {
                            return done(null, user);
                        }else {
                            // if no match found
                            return done(null, false, {message: 'Password incorrect!'})
                        }
                    });                    
                })
                .catch(err => console.log(err));
        })
    );

    //After successful authentication, serializeUser() and deserializeUser() will maintain the user in session
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });    
}


