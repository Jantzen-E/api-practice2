var express = require('express');
var router = express.Router();
// const DAL = require('../dataAccessLayer');
// const ObjectId = require('mongodb').ObjectId;
// require('dotenv').config();
const app = express();
// const port = 5000;
// process.env.PORT; 
// const cors = require('cors');
// add our data access layer file
// app.use(bodyParser.json());
// app.use(cors());
// DAL.Connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// app.get('/waterFilters', async (req, res) => {
//   const options = {};
//   const result = await DAL.Find(options);

//   if (result) {
//     res.status(200).send(result);
//   }
//   else {
//     res.status(400).send('items not found');
//   }
// });

module.exports = router;
