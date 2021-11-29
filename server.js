import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors'

//app config
const app = express();
const port = process.env.PORT || 8003;
const connection_url = "mongodb+srv://dating-app:<password>@cluster0.t1wjt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//middlewares
app.use(express.json());
app.use(Cors());

//db config
mongoose.connect(connection_url, {})

//api endpoints
app.get("/", (req, res) => res.status(200).send("HELLO CLEVER PROGRAMMERS!!"))

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

app.get('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

//listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));

