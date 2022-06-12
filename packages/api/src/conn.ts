import { MongoClient } from 'mongodb';

const connectionString = 'localhost:27017'
const client = new MongoClient(connectionString)

let dbConnection;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
          if (err || !db) {
            return callback(err);
          }
    
          dbConnection = db.db("diggr");
          console.log("Successfully connected to MongoDB.");
    
          return callback();
        });
      },
    
      getDb: function () {
        return dbConnection;
      },    
}