const express = require('express');
const app = express();



/**GET Request */
app.get('/', (req, res) => {
    res.send('Wel-Come To MERN Stack Development');
});



/**Create Server */
const port = 5000;
app.listen(port, () => {
    console.log(`Server Running On Port: ${port}`);
});