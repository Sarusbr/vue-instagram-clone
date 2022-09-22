const MongoClient = require('mongodb').MongoClient;
const {databaseConfig, databaseName} = require('../config/config.js');
const client = new MongoClient(databaseConfig.URL);



async function createPost(username, password, callback) {

  try {
    await client.connect();
    console.log('Connected successfully to server (createPost)');
    const db = client.db(databaseConfig.databaseName);
    const collectionPost = db.collection('posts');


    
  } catch (error) {
    console.log(error);
  } finally{
    await client.close();
  }
};


module.exports = {
    createPost: createPost
}
