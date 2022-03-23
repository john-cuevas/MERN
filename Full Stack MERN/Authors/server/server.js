// import dependencies

const express = require('express')

// allow front-end back-end interaction
const cors = require('cors')

const app = express()

// config mongoose
require("./configs/mongoose.config")

// express config for post
app.use(cors())
app.use(express.json(), express.urlencoded({ extended:true }))

// routes
require("./routes/authors.routes")(app)

// listen to the port
app.listen(8000, () => console.log("The server is all fired up on port 8000"))