import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
// const __dirname = dirname(fileURLToPath(import.meta.url))

dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {console.log('Connected to the database')}).catch((err) => {console.log(err)});

const app = express();
const port = 3000

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/client/index.html')
// })

app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>')
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})