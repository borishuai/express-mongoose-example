var User = require('../models/user');

exports.list = function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      //handle error
    }

    res.render('userlist.html', {users: users});
  });
  
};

exports.login = function(req, res) {
  if (req.method === 'GET') {
    res.render('login.html');
  } else {
    User.findOne({email: req.body.email}, function(err, user) {
      if (err || !user) {
        //handle error
      }
      if (user.authenticate(req.body.password)) {
        res.redirect('/');
      }
    });
  }
};

exports.register = function(req, res) {
  if (req.method === 'GET') {
    res.render('register.html');
  } else {console.log('body: ', req.body);
    var user = new User(req.body);
    user.save(function(err) {
      console.log('err: ', err);
      if (!err) {
        console.log('err: ', err);
        res.redirect('/');
      }
    });
  }
  
};