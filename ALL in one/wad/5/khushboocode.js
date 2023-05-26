const express=require('express');

/*imports the Express module and assigns it to the variable express. 
It allows us to create an instance of the Express application.*/


const app=express();

/* This line creates a new Express application by invoking the express function.
 The returned object app represents the Express application and allows us to define routes and middleware*/ 

app.use(express.static('public'))
/*This line sets up the static file middleware using express.static. It tells Express to serve static files from the public directory. 
This means that any files in the public directory will be directly accessible by clients without any special routing.
*/

app.listen(4000,()=>{
    console.log("server started");
})
/*
This line starts the server and listens for incoming HTTP requests on port 4000. The listen method takes a port number and a callback function that will be executed once the server starts. 
In this case, the callback simply logs "server started" to the console.*/ 


//comands
//npm init
//npm install express --save
//node index.js
