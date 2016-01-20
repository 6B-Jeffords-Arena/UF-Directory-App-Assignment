/* Fill out these functions using Mongoose queries*/

var listingsDB = require('./ListingSchema.js'),
    mongoose = require('mongoose'),
    config = require('./config.js');

    mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  listingsDB.find({name: 'Library West'}, function(err, listing){
    if (err) throw err;

    console.log("\nLibrary West:\n");
    console.log(listing);
  });
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
};

var removeCable = function() {
listingsDB.findOneAndRemove({code: 'CABL'}, function(err,listing){
     if(err) throw err;
     console.log('\nRemoved Cable...');
   });
listingsDB.find({code: 'CABL'}, function(err, listing){
  if (err) throw err;

  console.log("\nCABL:\n");
  console.log(listing);
});
};

  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
var updatePhelpsMemorial = function() {
  listingsDB.findOneAndUpdate({code: 'PHL'}, {address: 'Phelps Lab, Gainesville, FL 32611'}, function(err, listing){
    if (err) throw err;
  });

  listingsDB.find({code: 'PHL'}, function(err, listing){
  if (err) throw err;
  console.log("\nPhelps Lab:\n");
  console.log(listing);
});
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   listingsDB.find({}, function(err,listings){
     if(err) throw err;
     console.log('\nAll listings:\n')
     console.log(listings);
   });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();