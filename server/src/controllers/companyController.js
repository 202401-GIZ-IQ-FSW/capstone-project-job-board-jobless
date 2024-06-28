const Company = require('../models/Company');

exports.createCompany = async (req, res) => {
  const { name, description } = req.body;
  const createdBy = req.user;

  try {
    const newCompany = new Company({
      name,
      description,
      createdBy,
    });

    const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.find().populate('createdBy', 'name email');
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getCompanyById = async (req, res) => {
  const { companyId } = req.params;

  try {
    const company = await Company.findById(companyId).populate('createdBy', 'name email');
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateCompany = async (req, res) => {
  const { companyId } = req.params;
  const { name, description } = req.body;

  try {
    const updatedCompany = await Company.findByIdAndUpdate(companyId, {
      name,
      description,
    }, { new: true });

    if (!updatedCompany) {
      return res.status(404).json({ message: 'Company not found' });
    }

    res.status(200).json(updatedCompany);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteCompany = async (req, res) => {
  const { companyId } = req.params;

  try {
    const deletedCompany = await Company.findByIdAndDelete(companyId);
    if (!deletedCompany) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(200).json({ message: 'Company deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.uploadCompanyLogo = async (req, res) => {
  const { companyId } = req.params;
  const file = req.file;

  try {
    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    company.logo = file.path;
    await company.save();

    res.status(200).json({ logo: file.path });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
