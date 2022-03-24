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

// CRUD - READ
// In Express, we handle a GET request with the get method:
//               app.get(endpoint, callback)

app.get('/', (req, res) => {
    res.send('Hello World')
  })


//   CRUD - CREATE


app.post('/', (req, res) => {
   
  })


//   CRUD - UPDATE

app.put('/', (req, res) => {

})

//CRUD = DELETE

app.delete('/quotes', (req, res) => {
  
  })