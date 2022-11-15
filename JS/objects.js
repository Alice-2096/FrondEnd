'use strict';

//creating objects
var a = {}; //empty object
var b = new Object();

var user = {
  name: 'John',
  age: 23,
  isAdmin: true,
  'likes dancing': false,
};
//object properties are represented by key-value pairs

//use dot property accessor to access valid identifiers
document.write(user.name);
//square brackets property accessor to access string denoting the property name
document.write(user['likes dancing']);

//add property to the predefined object
user['gender'] = 'male';

//delete a property from the predefined object
delete user.isAdmin;

//accessing object properties
var bool = 'gender' in user;
alert(bool);
