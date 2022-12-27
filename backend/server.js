const cors = require('cors');
const playerDetails = require('./routes/playerDetails')
const gameDetails = require('./routes/gameDetails')
const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/memoryGame')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));


app.use(express.json());
app.use(cors());
app.use('/api', playerDetails);
app.use('/api/gameDetails', gameDetails);


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));