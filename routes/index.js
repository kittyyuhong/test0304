var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*test K github进行测试*/
module.exports = router;

router.get('/myTest', function(req, res, next) {
    res.render('myTestView', { title: 'This is my Test html!' });
});
