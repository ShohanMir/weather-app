const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// var mongoose = require('./mongoconnection');

// module.exports = async (arg1, arg2, arg3) => {

//     await mongo().then(async mongoose => {
//         try{
//             console.log('Connected to mongo!!');
//             await command.execute(client, message, args);
//         }
//         finally{
//             mongoose.connection.close();
//         }
//     });

// };

const app = express();



app.use(cors())

app.use(express.static('Public'))
// app.get('/', (req, res) => {
//     res.send('<h1>Hello there, Currently it is running on PORT 3000</h1>')
// })

// app.use(bodyParser.urlencoded({extended: false}));
// app.use('/API/History', require('./API/route'))
// const express = require('express');
// import bodyParser from "body-parser";

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/History', require('./api/route'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('APP is Running on port'+ PORT);
    mongoose.connect(`mongodb+srv://Shohan:246816Sm@cluster0.htuu9.mongodb.net/ project-weather?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true}, function(err, res) {
        try {
            console.log('Connected to Database');
        } catch (err) {
            throw err;
        }
        // console.log('Database connection established')
    })

    // mongoose.connect(
    //     (`mongodb+srv://Shohan:246816Sm@cluster0.htuu9.mongodb.net/ project-weather?retryWrites=true&w=majority`_,{ useNewUrlParser: true, useUnifiedTopology: true },
    //     function (err, res) {
    //         try {
    //             console.log('Connected to Database');
    //         } catch (err) {
    //             throw err;
    //         }
    //     })
})