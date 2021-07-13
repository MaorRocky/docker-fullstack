const ping = (req, res) => {
  mongoose.connection.db.admin().ping((error, result) => {
    if (error || !result) {
      res.send({ message: `Ping faile with ${error}`, status: 'fail' });
    }
    res.send({ message: `Connection succeded ${result}`, status: 'success' });
  });
};

const testResponse = (req, res) => {
  res.send('Hello from express');
};

module.exports = { ping, testResponse };
