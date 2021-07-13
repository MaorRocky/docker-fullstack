const healthCheck = require('./health.routers.js');
const cors = require('cors');
const notes = require('./notes.routes.js');
const bodyParser = require('body-parser');

const initRouter = (app) => {
  app.use(cors());
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

  // parse application/json
  app.use(bodyParser.json());
  app.use(healthCheck);
  app.use(notes);
};

exports.initRouter = initRouter;
