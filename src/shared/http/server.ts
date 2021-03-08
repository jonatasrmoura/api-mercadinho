import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors);

app.get('/test', (req, res) => {
    return res.send('Falaaaa');
})

app.listen(3333, () => {
    console.log('Server is running!');
});
