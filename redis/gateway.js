import express from "express";
import axios from "axios";
import {getFromRedis} from "./redis.js";
const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
    const start = new Date();
    await axios.get('http://localhost:4001')
    const cacheKey = `microservice1_data`;
    const getRedis = await getFromRedis(cacheKey)
    res.send({
        message: 'Hello from the gateway',
        processingTime: new Date() - start,
        getFromRedis: getRedis,
    });
})

app.listen(4000, () => {
    console.log('Gateway listening on port 4000');
})