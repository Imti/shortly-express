var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var Link = require('./link');

var User = db.Model.extend({
  // table name users
  tableName: 'users',
  // two props username, pw
  initialize: function(){
    this.on('creating', function(model, attrs, options){
     var hashPassword = bcrypt.hashSync(model.get('password'));
     model.set('password', hashPassword);
    });
  },

  urls: function() {
    return this.hasMany(Link);
  }
});

module.exports = User;
