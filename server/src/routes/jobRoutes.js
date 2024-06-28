const express = require('express');
const { getJobs, getJobById, createJob, updateJob, deleteJob, searchJobs } = require('../controllers/jobController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', getJobs);
router.get('/:jobId', getJobById);
router.post('/', auth, createJob);
router.put('/:jobId', auth, updateJob);
router.delete('/:jobId', auth, deleteJob);
router.get('/search', searchJobs);

module.exports = router;
