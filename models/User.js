var db=require('../dbconnection');

var User={
getAllUsers: function(callback){
  return db.query("select * from user",callback);
},

getUserById:function(id,callback){
  return db.query("select * from user where userId=?",[id],callback);
},
adduser:function(user,callback){
   console.log("inside service");
   console.log(user.Id);
return db.query("Insert into user values(?,?,?)",[user.Id,user.Title,user.Status],callback);
//return db.query("insert into user(Id,Title,Status) values(?,?,?)",[user1.Id,user1.Title,user1.Status],callback);
},
deleteUser:function(id,callback){
    return db.query("delete from user where Id=?",[id],callback);
},
updateUser:function(id,user,callback){
    return  db.query("update user set Title=?,Status=? where Id=?",[User.Title,User.Status,id],callback);
},
deleteAll:function(item,callback){
  var delarr=[];
     for(i=0;i<item.length;i++){

         delarr[i]=item[i].Id;
     }
     return db.query("delete from user where Id in (?)",[delarr],callback);
  }
};

module.exports=User;
