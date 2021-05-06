const mongoose = require('mongoose');

mongoose.connect(process.env.DB_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (err) => {
        if (err) {
            console.log(`Failed to Connect to MongoDB. Error: ${err}`)
        } else {
            console.log('Connectd to MongoDB')
        }
    });
// try to reconnect
module.exports = mongoose;