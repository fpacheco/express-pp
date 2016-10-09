var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.render('otro', { title: 'Express' });
  res.send('Got a GET request at /otro');
});

router.get('/:id', function(req, res, next) {
  //res.render('otro', { title: 'Express' });
  res.send('Got a GET request at /otro/' + req.params.id);
});

router.post('/', function (req, res) {
  res.send('Got a POST request at /otro');
});

router.put('/', function (req, res) {
  res.send('Got a PUT request at /otro');
});

router.delete('/', function (req, res) {
  res.send('Got a DELETE request at /otro');
})

module.exports = router;
