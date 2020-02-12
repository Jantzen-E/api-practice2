var express = require('express');
var router = express.Router();
const DAL = require('../dataAccessLayer');

/* GET users listing. */
// router.get('/waterFilters', function(req, res, next) {
//   console.log('processing request');
//   DAL.Find(req, res)
//   res.send('respond with a resource');
// });

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
// router.get('/waterFilters', function(req, res, next) { 
//   console.log('processing request')
//   DAL.getWaterFilter(req, res)
// });

module.exports = router;
