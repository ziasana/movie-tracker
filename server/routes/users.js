import express from 'express';
import User from '../models/User.js';

const router = express.Router();


// GET /users - get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find(); // retrieve all documents
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  console.log(`Fetching user with ID: ${userId}`);
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// POST /users → create new user
router.post('/', async (req, res) => {
  try {
    const { id, name, email, age } = req.body;

    // Create a new user document
    const newUser = new User({ id, name, email, age });

    // Save to MongoDB
    const savedUser = await newUser.save();

    res.status(201).json(savedUser); // return the saved document
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
