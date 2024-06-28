const express = require('express');
const auth = require('../middleware/auth');
const { applyForJob, getApplicationsForJob, getApplicationsByUser, updateApplicationStatus } = require('../controllers/applicationController');

const router = express.Router();

router.post('/apply/:jobId', auth, applyForJob);
router.get('/job/:jobId', auth, getApplicationsForJob);
router.get('/user', auth, getApplicationsByUser);
router.put('/:applicationId', auth, updateApplicationStatus);

module.exports = router;
