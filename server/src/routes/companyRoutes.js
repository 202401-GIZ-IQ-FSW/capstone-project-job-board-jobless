const express = require('express');
const auth = require('../middleware/auth');
const multer = require('multer');
const { createCompany, getCompanies, getCompanyById, updateCompany, deleteCompany, uploadCompanyLogo } = require('../controllers/companyController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', auth, createCompany);
router.get('/', getCompanies);
router.get('/:companyId', getCompanyById);
router.put('/:companyId', auth, updateCompany);
router.delete('/:companyId', auth, deleteCompany);
router.post('/:companyId/logo', auth, upload.single('logo'), uploadCompanyLogo);

module.exports = router;
