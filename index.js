const express = require('express');
const cors =require('cors')
require('./db')
const app = express();

app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 5000;

const Products =require('./Routes/products.js');
const Login = require('./Routes/usercred.js');
app.use('/products', Products);
app.use('/login', Login);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




// McE2SOllukHy6P7D