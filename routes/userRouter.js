const {Router}= require('express');
const router =Router();
const UserCtrl = require('../controllers/userCtrl');

router.get('/users',UserCtrl.getUsers);
router.get('/users/:id',UserCtrl.getSingleUser);
router.post('/users',UserCtrl.addUser);
router.delete('/users/:id',UserCtrl.deleteUser);

module.exports=router;