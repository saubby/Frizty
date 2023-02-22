const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/frizty',
    {
        //useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

mongoose.set('debug', true);

module.exports = mongoose.connection;