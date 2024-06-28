const express = require('express');
const auth = require('../middleware/auth');
const multer = require('multer');
const { getProfile, updateProfile, uploadProfilePicture } = require('../controllers/profileController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', auth, getProfile);
router.put('/', auth, updateProfile);
router.post('/profile-picture', auth, upload.single('profilePicture'), uploadProfilePicture);

module.exports = router;
