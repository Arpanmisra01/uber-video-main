const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

async function connectToDb() {
    try {
        const uri = process.env.DB_CONNECT;
        console.log("uri : ",uri)
        mongoose.connect(uri);

        // mongoose.connect("mongodb+srv://kumarsasadhar0:a9iJhkQDnkXttUlI@uber.spmc8tr.mongodb.net/?retryWrites=true&w=majority&appName=Uber", {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // });
        console.log('Connected to DB');
    } catch (error) {
        console.error('DB Connection Error:', error);
    }

    // .then(() => {
    //     console.log('Connected to DB');
    // }).catch(err => {
    //     console.error('DB Connection Error:', err);
    // });

}


module.exports = connectToDb;
