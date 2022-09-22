const MongoClient = require('mongodb').MongoClient;
const {databaseConfig, databaseName} = require('../config/config.js');
const client = new MongoClient(databaseConfig.URL);



async function createUser(newName, newEmail, newUsername, newPassword) {

  try {
    await client.connect();
    console.log('Connected successfully to server (createUser)');
    const db = client.db(databaseConfig.databaseName);
    const collection = db.collection('users');
    const insertResult = await collection.insertOne({profilePhoto: "https://instagram.fala6-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fala6-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=dOq_VeDZWtoAX-kyIdV&edm=ANmP7GQBAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT9cN0ujZP7Bq-W4veQV2zTtVjYCizVX1GMKn0rC6iImeA&oe=6331B3CF&_nc_sid=276363", name: newName, password : newPassword, email: newEmail, username: newUsername, bio : "", postsCount : 0, followersCount : 0, folowingCount : 0, posts : []});
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
