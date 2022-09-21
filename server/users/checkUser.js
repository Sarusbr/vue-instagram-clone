const MongoClient = require('mongodb').MongoClient;
const {databaseConfig, databaseName} = require('../config/database.js');
const client = new MongoClient(databaseConfig.URL);

async function checkUser(username, callback, password) {

  try {
    await client.connect();
    console.log('Connected successfully to server (checkUser)');
    const db = client.db(databaseConfig.databaseName);
    const collection = db.collection('users');
    const result = await collection.findOne({ 
      $and:[
        {
          username: username
        },
        {
          password : password ?? { $exists: true }
        }
      ]
    });
    if( result != null ){
       return  callback("Available"); //available
    }
    else{
      return callback("NotAvailable"); //not available
    }
  } catch (error) {
    console.log(error);
  } finally{
    await client.close();
  }
}



module.exports = {
    checkUser: checkUser
}
