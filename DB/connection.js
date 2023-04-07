const mongoose = require('mongoose');

const connection = () => {
    mongoose.connect('mongodb+srv://jicroofficial:hello_lode_yeh_secure_password_hai_samjha@database.vhcuc8z.mongodb.net/Admins?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected!'))
    .catch((err) => console.error('MongoDB connection error:', err));
}

module.exports = connection
