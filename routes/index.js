var express = require('express');

var router = express.Router();

var locals= {
  myself:{
    name: 'Sanjay Bansal',
    program:'Computer Programmer',
    title: 'Web Developer',
    age:'20',
    bio:'I am passionate Computer Programmer and studying Computer Programming at Georgian college.My objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to design compelling and attractive websites. I enjoy working on projects that involve a mix of web and graphic design, web development, database management and programming.As a developer, I specialize in creating modular and scalable front-end architectures.'
  },
  workExperience:{
    W1:{
      title:'Junior Programmer(Co-op)',
      companyName:'Oqab Technologies Pvt. Ltd ',
      time:'2018-Feb - 2018-May',
      jobDescription:'Provides various front-end related services ranging from development work, consultations and speaking engagements.'
    },
    W2:{
      title:'Customer Service Representative(Part time)',
      companyName:'Shell gas station',
      time:'February 2017 -  present',
      jobDescription:'Interact with customers on behalf of an organization.Provide information about products and services, take orders, respond to customer complaints, and process returns.The target is to ensure excellent service standards and maintain high customer satisfaction.'
    },
    W3:{
      title:'Junior Computer Technician',
      companyName:'MEHTA COMPUTERS',
      time:'January 2014 - June 2014',
      jobDescription:'Provide complete basic IT maintenance and support tasks, as well as managing the relationship between the customer and Company.'
    }
  },
  education:{
    educt1:{
      instituteName:'Georgian College, Barrie, ON',
      program:'Computer Programmer',
      description:'Key Courses: Web and Internet Fundamentals, Programming Fundamentals, System Analysis, Object Oriented Programming, Internet of Things, Web Programming, The Mainframe Environment, Relational Database, Project Management.'
    }
  }
};

router.get('/', function(req, res, next) {
  res.render('index', locals);
});

module.exports = router;
