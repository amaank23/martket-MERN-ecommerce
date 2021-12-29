const express = require('express');
const connectDB = require('./config/db');



const app = express();

// CONNECT TO DATABASE
connectDB();

// init Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('API Running'));

// DEFINE ROUTES
app.use(require('./routes/auth'));
app.use(require('./routes/customers'));
app.use(require('./routes/users'));
app.use(require('./routes/categories'));
app.use(require('./routes/products'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server has Started on PORT ${PORT}`));