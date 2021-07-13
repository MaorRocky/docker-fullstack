const Note = require('../models/notes.models.js');

const createNote = async (req, res) => {
  console.log(req.body);
  if (!req.body) {
    res.status(400).send({ message: 'Note cant be empty', success: false });
  }

  const note = new Note({
    title: req.body.title,
    description: req.body.description,
  });
  let data;
  try {
    data = await note.save();
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Somthing went wrong', success: false });
  }

  res.status(201).send({ message: 'Note created', success: true, data: data });
};

module.exports = { createNote };
