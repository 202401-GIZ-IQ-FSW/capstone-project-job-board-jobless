exports.searchJobs = async (req, res) => {
    const { keywords, location, type } = req.query;
    let query = {};
  
    if (keywords) {
      query.title = { $regex: keywords, $options: 'i' };
    }
    if (location) {
      query.location = { $regex: location, $options: 'i' };
    }
    if (type) {
      query.type = type;
    }
  
    try {
      const jobs = await Job.find(query).populate('postedBy', 'name email');
      res.status(200).json(jobs);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  