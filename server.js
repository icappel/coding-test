import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import apiRouter from './routes/apiRouter.js'

const app = express()

// Route API requests to the API
app.use('/api', apiRouter)

// Serve the build
// Replicate __dirname, since it's not available in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
