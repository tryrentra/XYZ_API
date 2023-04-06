const mongoose = require('mongoose');

const connection = () => {
    mongoose.connect('mongodb+srv://jicroadmin:0Wc2QVAjZkftWWJo@jicroadmin.1au3zsq.mongodb.net/Database?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected!'))
    .catch((err) => console.error('MongoDB connection error:', err));
}

module.exports = connection