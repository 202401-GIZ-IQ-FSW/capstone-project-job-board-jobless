const Application = require('../models/Application');
const Job = require('../models/Job');

exports.applyForJob = async (req, res) => {
  const { jobId } = req.params;
  const { resume, coverLetter } = req.body;
  const applicant = req.user;

  try {
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    const newApplication = new Application({
      job: jobId,
      applicant,
      resume,
      coverLetter,
    });

    const savedApplication = await newApplication.save();
    res.status(201).json(savedApplication);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getApplicationsForJob = async (req, res) => {
  const { jobId } = req.params;

  try {
    const applications = await Application.find({ job: jobId }).populate('applicant res.status(200).json(updatedApplication);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
