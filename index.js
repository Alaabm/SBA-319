const express = require('express');
const app = express();
const PORT = 5001;

app.get("/", (req, res) =>{
    res.send("Hello World! This is my server!!!")
});

app.listen(PORT, () => {
    console.log(`All Aboard the Express Ship: ${PORT}`);
});
