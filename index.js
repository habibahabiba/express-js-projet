const express = require ('express');
const app = express();
const port = 4091







app.listen(port, error=>{
    if (error){
        console.log(error)
    }
    else{
        console.log('server is running')
    }
})
