import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/random-users', async (req, res) => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=10');
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch random users' });
  }
});

export default router; 