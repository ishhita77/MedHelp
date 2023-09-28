const express = require('express');
  const bodyParser = require('body-parser');
const app = express();
const path = require('path')


app.use('/public', express.static(path.join(__dirname, 'public')))

app.listen(3000, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ 3000)
    else 
        console.log("Error occurred, server can't start", error);
    }
);