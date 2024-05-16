const dotenv = require('dotenv');
dotenv.config();


const PORT = process.env.PORT;
const express = require('express');
const { getAllTours, getTourById, createTour, updateTour, deleteTour } = require('./src/Utils/methods');

const app = express();
//middleware
app.use(express.json());



app.get('/api/v1/tours', getAllTours);

app.get('/api/v1/tours/:id', getTourById);

app.post('/api/v1/tours', createTour);

//Just update the properties that were updated
app.patch('/api/v1/tours/:id', updateTour);

app.delete('/api/v1/tours/:id', deleteTour);

app.listen(PORT, () => {
  console.log('Server running on: ', PORT);
});
