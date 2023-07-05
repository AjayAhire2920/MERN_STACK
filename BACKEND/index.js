const express = require('express');
const app = express();
const cors = require('cors');
const dbConnection = require('./Database/MongoDB');
const userModel = require('./Models/Users');


/**Middleware */
app.use(express.json());
app.use(cors());

/**GET Request */
app.get('/', (req, res) => {
    res.send('Wel-Come To MERN Stack Development');
});

/**POST Request */
app.post('/register', async (req, res) => {
    const user = new userModel(req.body);
    const result = await user.save();
    res.status(201).send(result)
});



/**Create Server */
const port = 5000;
app.listen(port, () => {
    console.log(`Server Running On Port: ${port}`);
    dbConnection();
});