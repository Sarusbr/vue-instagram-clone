const databaseConfig = {
    databaseName : 'vueInstagramClone',
    URL:'mongodb+srv://admin:admin546@vueinstagramclone.vu7yh3c.mongodb.net/?retryWrites=true&w=majority',
    collections:{
        users:'users',
        posts:'posts'
    }
};

module.exports = {
    databaseConfig: databaseConfig
}