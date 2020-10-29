const router = require('express').Router();
const userController = require('../controllers/userController');

function initilization_function(){
   getRoutes();
   postRoutes();
}

initilization_function();

function getRoutes(){
   router.get('/form_details',userController.formDetails)
}

function postRoutes(){
   router.post('/update_form',userController.updateForm)
}

module.exports = router