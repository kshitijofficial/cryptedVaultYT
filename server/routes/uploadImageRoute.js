const express = require('express')
const router = express.Router();
const {uploadImageController}=require('../controllers/uploadImageController')
const {uploadUserImage}=require('../middleware/multer')
const {authenticateToken}= require('../middleware/authenticateToken')
router.post('/uploadImage',authenticateToken,uploadUserImage,uploadImageController)

module.exports=router