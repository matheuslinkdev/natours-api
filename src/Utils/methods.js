const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}../../../dev-data/data/tours-simple.json`)
);

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'Success',
    results: tours.length,
    data: {
      tours,
    },
  });
};
const getTourById = (req, res) => {
  const tourId = Number(req.params.id);
  const tour = tours.find((t) => t.id === tourId);

  if (tourId > tours.length) {
    return res.status(400).json({
      status: 'Fail',
      message: 'Invalid ID',
    });
  }

  if (!tour) {
    return res.status(400).json({
      status: 'Fail',
      message: 'Invalid ID',
    });
  }

  if (!tour) {
    return res.status(404).json({ message: 'Tour not found' });
  }

  res.status(200).json({
    status: 'Success',
    results: 1,
    data: {
      tour,
    },
  });
};

const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

const updateTour = (req, res) => {
  if (Number(req.params.id) > tours.length) {
    return res.status(404).json({
      status: 'Fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'Success',
    data: {
      tour: '<Update Tour Here...>',
    },
  });
};

const deleteTour = (req, res) => {
  if (Number(req.params.id) > tours.length) {
    return res.status(404).json({
      status: 'Fail',
      message: 'Invalid ID',
    });
  }

  res.status(204).json({
    status: 'Success',
    data: {
      tour: null,
    },
  });
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};
