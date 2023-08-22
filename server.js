const express = require ("express");
const app = express();

const port = 5000;

app.get("/data" , (req, res) => {
    res.send()
});

app.listen(port, (err, data) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(`http://localhost: ${port}`)
    }
});
