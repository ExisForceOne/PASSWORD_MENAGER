import dotenv from 'dotenv'
dotenv.config({path: "./.env"})

import app from "./app.js";



const port = process.env.PORT || 3002


app.listen(port, ()=>{
    console.log(`Server listening on port: ${port}`)
})