const express = require("express");
const app = express();
const port = 5001;

// express allows to listlen 


// do stuff  in my app bellow, static is a method  it handles static files, it allows the app to use static files

app.use("/static", express.static("public"))

// listlen

app.listen(port, () => {
    console.log(`Listlening on ${port} `)
})


