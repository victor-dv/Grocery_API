const express = require ("express")
const app = express()



const user_routes = require('./routes/user_router')


app.use(express.json())
app.use("/auth",user_routes)

const port = 3030

app.listen(port, ()=>{
    console.log("Server online")
})


