const MongoClient = require('mongodb').MongoClient;
const {databaseConfig, databaseName} = require('../config/config.js');
const client = new MongoClient(databaseConfig.URL);


async function getUser(username, password, callback) {

  try {
  
    await client.connect();
    console.log('Connected successfully to server (getUser)');
    const db = client.db(databaseConfig.databaseName);
    const collection = db.collection('users');
    const result = await collection.findOne({ 
      $and:[
        {
          username: username
        },
        {
          password : password 
        }
      ]
    });
    if( result != null ){
       return result;
    }
    else{
      return ("NotAvailable"); //not available
    }
  } catch (error) {
    console.log(error);
  } finally{
    await client.close();
  }
}




module.exports = {
    getUser: getUser
}
