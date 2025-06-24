const School = require('../models/School');

// CREATE
exports.addSchool = async (req, res) => {
    try {
        const school = new School(req.body);
        await school.save();
        res.status(201).json(school);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// READ ALL
exports.getAllSchools = async (req, res) => {
    try {
        const schools = await School.find();
        res.json(schools);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// READ ONE
exports.getSchoolById = async (req, res) => {
    try {
        const school = await School.findById(req.params.id);
        res.json(school);
    } catch (err) {
        res.status(404).json({ error: 'School not found' });
    }
};

// UPDATE
exports.updateSchool = async (req, res) => {
    try {
        const school = await School.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(school);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE
exports.deleteSchool = async (req, res) => {
    try {
        await School.findByIdAndDelete(req.params.id);
        res.json({ message: 'School deleted' });
    } catch (err) {
        res.status(404).json({ error: 'School not found' });
    }
};
