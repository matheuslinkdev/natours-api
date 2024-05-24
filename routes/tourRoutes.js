const express = require('express');
const tourController = require('../controllers/tourController');
const app = express();
const router = express.Router();

//Param middleware
router.param('id', tourController.checkID);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTourById)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);
app.use('/api/v1/tours', router);

module.exports = router;
