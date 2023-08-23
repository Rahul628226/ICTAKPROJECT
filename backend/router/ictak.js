const express = require('express');
const router = express.Router();
const Ictak = require('../model/ictak');

router.post('/api/add-comment', async (req, res) => {
  const { comments, pageNumber } = req.body;

  try {
    const newComment = new Ictak({
      comments,
      pageNumber,
      date: new Date(),
    });

    await newComment.save();
    res.status(201).json({ message: 'Comment added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding comment' });
  }
});

module.exports = router;
