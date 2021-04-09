const express = require('express');
const app = express();
const path = require('path');
const port = 80;

// // for serving static files 
// app.use('/static', express.static('static'));

// setting the template engine
app.set('view engine', 'pug');

// set the views directory
app.set('views' , path.join(__dirname, 'views') )

// our pug demo end point
app.get('/demo', (req, res)=>  {
    res.status(200).render('demo', { title: 'Hello there', message: 'How are u feeling today ??(this is PUG)' })
  })

// app.get("/", (req, res)=>{
//     res.status(200).send("This is my Home page");
// });

// app.get("/about",(req, res) =>{
//     res.send("this is about section of  my first express app");
// });

// app.post("/about",(req, res) =>{
//     res.send("this is a post request of about section of  my first express app");
// });


app.listen(port, ()=>{
    console.log(`This app started  successfully on port ${port}`);
});