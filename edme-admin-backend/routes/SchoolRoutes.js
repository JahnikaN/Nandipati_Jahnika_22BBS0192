const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

// CRUD routes
router.post('/', schoolController.addSchool);
router.get('/', schoolController.getAllSchools);
router.get('/:id', schoolController.getSchoolById);
router.put('/:id', schoolController.updateSchool);
router.delete('/:id', schoolController.deleteSchool);

module.exports = router;
