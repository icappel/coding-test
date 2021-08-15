import express from 'express'
import path from 'path'
import apiRouter from './routes/apiRouter.js'

const app = express()

app.use('/api', apiRouter)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
