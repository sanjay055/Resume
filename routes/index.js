var express = require('express');

var router = express.Router();

var locals= {
  name: 'Sanjay Bansal',
  program:'Computer Programmer',
    age:'20',
    bio:'I am passionate Computer Programmer and studying Computer Programming at Georgian college.My objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to design compelling and attractive websites. I enjoy working on projects that involve a mix of web and graphic design, web development, database management and programming.'
};

router.get('/', function(req, res, next) {
  res.render('index', locals);
});

module.exports = router;
