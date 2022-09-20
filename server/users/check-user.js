const MongoClient = require('mongodb').MongoClient;
const {databaseConfig, databaseName} = require('../config/database.js');
const client = new MongoClient(databaseConfig.URL);

async function checkUser(username, password, callback) {

  try {
    if(username===undefined) return;
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(databaseConfig.databaseName);
    const collection = db.collection('users');
    const deneme = await collection.findOne({ 
      $and:[
        {
          username: username
        },
        {
          password : password ?? { $exists: true }
        }
      ]
    });
    if( deneme != null ){
       return  callback("true");
    }
    else{
      return callback("false");
    }
    console.log();
  } catch (error) {
    console.log(error);
  } finally{
    await client.close();
  }
}



module.exports = {
    checkUser: checkUser
}
