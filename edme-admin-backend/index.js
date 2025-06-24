const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const schoolRoutes = require('./routes/schoolRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware FIRST
app.use(cors());
app.use(express.json());

// ✅ Then routes
app.use('/api/admin', adminRoutes);
app.use('/api/schools', schoolRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('EdMe Admin Backend is running ✅');
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch(err => console.error('MongoDB connection error:', err));
