const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const auth = require("./middleware/jwt-verify")
const app = express()
const router = require("./routes/routes")
app.use(express.json())
app.use('/customer',router)
app.use(cors())




app.listen(5532, ()=> console.log("listening on http://localhost:5532"))