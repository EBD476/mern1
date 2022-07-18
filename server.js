import express from "express"
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import usersRouter from './routes/users.js'

dotenv.config()
const app = express()

app.use(express.json())

const port = process.env.PORT || 5000
const uri = process.env.MONGO_URL

app.use('/users',usersRouter)

mongoose.connect(uri, { useNewUrlParser: true}
);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});