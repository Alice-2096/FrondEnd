"use strict"; 

var user = new Object(); 
var user = {
    name: "John", 
    age: 23, 
    isAdmin: true,
    "likes dancing": false, 
};

//access 
document.write(user.name); 
document.write(user["likes dancing"]); 

//add
user["gender"] = "male"; 

//delete
delete user.isAdmin; 

var bool = "gender" in user; 
alert(bool); 






