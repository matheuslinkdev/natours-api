const express = require('express');
const userController = require('../controllers/userController');
const app = express();

const router = express.Router();

router.route('/').get(userController.getAllUsers).post(userController.createUser);
router.route('/:id').get(userController.getUser).patch(userController.updateUser).delete(userController.deleteUser);

app.use('/api/v1/users', router);

module.exports = router;
