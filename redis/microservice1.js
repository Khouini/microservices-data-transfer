import express from 'express';
const app = express();
import data140 from "../data/data_180mb.json"  with { type: "json" };
import {setToRedis} from "./redis.js";
app.use(express.json());
app.get('/', async (req, res) => {
    const startT = Date.now();
    const cacheKey = `microservice1_data`;
    const setRedis = await setToRedis(cacheKey, data140);
    res.send({
        message: 'Hello from microservice 1',
        processTime: Date.now() - startT,
        setRedis,
    });
});

app.listen(4001, () => {
    console.log('Microservice 1 listening on port 4001');
})