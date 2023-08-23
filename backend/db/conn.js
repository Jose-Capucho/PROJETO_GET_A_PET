const mongoose = require('mongoose');

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/getapet');
    console.log("Conectou ao Mongoose");
}

main().catch((error) => console.log(error));

module.exports = mongoose;