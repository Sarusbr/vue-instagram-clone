const MongoClient = require('mongodb').MongoClient;
const {databaseConfig, databaseName} = require('../config/config.js');
const client = new MongoClient(databaseConfig.URL);

function currentdateAndTime(){
var currentdate = new Date(); 
var datetime =  + currentdate.getFullYear() + "-"  
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "              
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

return datetime
};

async function createPost(username, profilePhoto, imageUrl, description, callback) {

  try {
    await client.connect();
    console.log('Connected successfully to server (createPost)');
    const db = client.db(databaseConfig.databaseName);
    const collectionPost = db.collection('posts');
    const collectionUser = db.collection('users');
    const insertPost = await collectionPost.insertOne({username: username, profilePhoto: profilePhoto, imageUrl : [imageUrl], description: description, dateAndTime: currentdateAndTime(), likeCount : 0, commentCount : 0});
    const insertUser = await collectionUser.updateOne({ username: username }, { $push: { posts: {username: username, profilePhoto: profilePhoto, imageUrl : [imageUrl], description: description, dateAndTime: currentdateAndTime(), likeCount : 0, commentCount : 0} } });
    console.log('Updated documents => createPost');
    return [{status : "Successfully Created"}];
  } catch (error) {
    console.log(error);
  } finally{
    await client.close();
  }
};


module.exports = {
    createPost: createPost
}
