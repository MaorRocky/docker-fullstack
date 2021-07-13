const express = require('express');
const router = express.Router();
const { createNote } = require('../controllers/notes.controller.js');
router.get('/notes', (req, res) => res.send('Hello fron notes!'));
router.get('/notes/:noteId', (req, res) =>
  res.send(`YOU requested note ${req.params.noteId} lol`)
);
router.post('/notes', createNote);
router.delete('/notes:id', (req, res) => res.send('Hello World!'));
router.patch('/notes:id', (req, res) => res.send('Hello World!'));

module.exports = router;
