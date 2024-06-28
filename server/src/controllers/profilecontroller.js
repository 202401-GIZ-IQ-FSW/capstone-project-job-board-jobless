const Profile = require('../models/Profile');

exports.getProfile = async (req, res) => {
  const userId = req.user;

  try {
    const profile = await Profile.findOne({ user: userId }).populate('appliedJobs postedJobs');
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateProfile = async (req, res) => {
  const userId = req.user;
  const { bio } = req.body;

  try {
    let profile = await Profile.findOne({ user: userId });

    if (!profile) {
      // Create new profile if not exists
      profile = new Profile({
        user: userId,
        bio,
      });
    } else {
      // Update existing profile
      profile.bio = bio;
    }

    await profile.save();
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.uploadProfilePicture = async (req, res) => {
  const userId = req.user;
  const file = req.file;

  try {
    let profile = await Profile.findOne({ user: userId });

    if (!profile) {
      profile = new Profile({
        user: userId,
      });
    }

    profile.profilePicture = file.path;
    await profile.save();

    res.status(200).json({ profilePicture: file.path });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
