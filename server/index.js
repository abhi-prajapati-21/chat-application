import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import userRouter from './routes/user.js'

const app = express();

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/', (req, res) => {
    res.send("this is chat App");
})

app.use('/user', userRouter)

const PORT = process.env.PORT || 5000

const CONNECTION_URL = "mongodb+srv://admin:abhi@chat-app.2kruyib.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect( CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(app.listen(PORT, () => console.log("server running on port")))
.catch((error) => console.log(error.message));


