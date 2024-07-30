import express from "express";
import axios from "axios";
const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
    const start = new Date();
    const ms1Data = await axios.get('http://localhost:4001');
    res.send({
        message: 'Hello from the gateway',
        processingTime: new Date() - start,
        ms1DataLength: ms1Data.data.data.length
    });
})

app.listen(4000, () => {
    console.log('Gateway listening on port 4000');
})