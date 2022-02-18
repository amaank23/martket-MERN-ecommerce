const express = require('express');
const connectDB = require('./config/db');
const path = require('path')



const app = express();

// CONNECT TO DATABASE
connectDB();

// init Middleware
app.use(express.json({ extended: false }))


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', ))
    })
}

// app.use(express.static('client/build'))

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', ))
// })
// DEFINE ROUTES
app.use(require('./routes/auth'));
app.use(require('./routes/customers'));
app.use(require('./routes/users'));
app.use(require('./routes/categories'));
app.use(require('./routes/products'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server has Started on PORT ${PORT}`));