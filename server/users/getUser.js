const MongoClient = require('mongodb').MongoClient;
const {databaseConfig, databaseName} = require('../config/config.js');
const client = new MongoClient(databaseConfig.URL);

async function getUser(username, password, callback) {

  try {
    await client.connect();
    console.log('Connected successfully to server (getUser)');
    const db = client.db(databaseConfig.databaseName);
    const collectionUser = db.collection('users');
   
    const result = await collectionUser.findOne({ 
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
      const resultAllUsers = await collectionUser.find({},{password:0}).toArray();
      const collectionPost = db.collection('posts');
      const resultAllPosts = await collectionPost.find({}).sort({dateAndTime : -1} ).toArray();
       return [{status : "Available"},  {result : result}, {resultAllUsers : resultAllUsers}, {resultAllPosts : resultAllPosts} ];
    }
    else{
        return [{status : "NotAvailable"}];
    }
  } catch (error) {
    console.log(error);
  } finally{
    await client.close();
  }
};


module.exports = {
    getUser: getUser
}
