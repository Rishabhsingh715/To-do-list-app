const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home');
const postController = require('../controllers/post_controller');



console.log('controller loaded');

router.get('/',homeController.home);
router.post('/create',postController.create);
router.get('/delete-task', homeController.deleteTask);



module.exports = router;