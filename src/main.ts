import express from 'express'
import cors from 'cors'

const app = express();

const DEFAULT_PORT = process.env.PORT || 3000

app.get('/', (_req, res) => {
    res.send('Welcome to sample API!')
});

app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use((_req, res) => {
    res.status(404)
})

app.listen(DEFAULT_PORT, () => {
    console.log(`Server running on port ${DEFAULT_PORT}`)
})