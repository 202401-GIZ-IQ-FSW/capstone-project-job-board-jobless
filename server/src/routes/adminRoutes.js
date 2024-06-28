const express = require('express');
const { getUsers, updateUser, deleteUser, getJobs, updateJob, deleteJob, getAnalytics } = require('../controllers/adminController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const router = express.Router();

router.get('/users', auth, admin, getUsers);
router.put('/users/:userId', auth, admin, updateUser);
router.delete('/users/:userId', auth, admin, deleteUser);

router.get('/jobs', auth, admin, getJobs);
router.put('/jobs/:jobId', auth, admin, updateJob);
router.delete('/jobs/:jobId', auth, admin, deleteJob);

router.get('/analytics', auth, admin, getAnalytics);

module.exports = router;
