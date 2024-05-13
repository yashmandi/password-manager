const express = require("express");
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'safe_cypher';
const app = express();
const port = 3000
app.use(bodyParser.json());
app.use(cors());

client.connect();

// get all passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult);
})

// save password    
app.post('/', async (req, res) => {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password);
    res.send({ success: true });
})

// delete password
app.post('/', async (req, res) => {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password)
    res.send({ success: true });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})