const MongoClient = require('mongodb').MongoClient;
const {databaseConfig, databaseName} = require('../config/config.js');
const client = new MongoClient(databaseConfig.URL);



async function createUser(newName, newEmail, newUsername, newPassword) {

  try {
    await client.connect();
    console.log('Connected successfully to server (createUser)');
    const db = client.db(databaseConfig.databaseName);
    const collection = db.collection('users');
    const insertResult = await collection.insertOne({profilePhoto: "https://i.ibb.co/dbWjdV0/44884218-345707102882519-2446069589734326272-n.jpg", name: newName, password : newPassword, email: newEmail, username: newUsername, bio : "", postsCount : 0, followersCount : 0, folowingCount : 0, posts : []});
    return [{status : "Successfully Created"}];
    console.log('Updated documents => createUser');
  } catch (error) {
    console.log(error);
  } finally{
    await client.close();
  }
}


module.exports = {
    createUser: createUser
}
