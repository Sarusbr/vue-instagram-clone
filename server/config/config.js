const databaseConfig = {
    databaseName : 'vueInstagramClone',
    URL:'mongodb+srv://admin:admin546@vueinstagramclone.vu7yh3c.mongodb.net/?retryWrites=true&w=majority',
    collections:{
        users:'users',
        posts:'posts'
    }
};

const publicFolder = '/../pages';
const imagesFolder = '/posts/images/';

module.exports = {
    databaseConfig: databaseConfig,
    publicFolder: publicFolder,
    imagesFolder: imagesFolder
}