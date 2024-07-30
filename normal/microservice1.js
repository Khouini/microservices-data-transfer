import express from 'express';
const app = express();
import data140 from "../data/data_180mb.json"  with { type: "json" };
app.use(express.json());
app.get('/', (req, res) => {
    res.send({
        message: 'Hello from microservice 1',
        data: data140
    });
});

app.listen(4001, () => {
    console.log('Microservice 1 listening on port 4001');
})