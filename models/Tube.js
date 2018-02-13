var db=require('../dbconnection');

var Tube={
getAllTubes: function(callback){
  return db.query("select * from tube",callback);
},

getTubeById:function(id,callback){
  return db.query("select * from tube where tubeId=?",[id],callback);
},
addTube:function(tube,callback){
   // console.log(tube.Id);
return db.query(
  "Insert into tube values(?,?,?,?,?,?,now())",
  [tube.tubeId,tube.folderId,tube.userId,
    tube.tubeOriginalTitle,tube.tubeCustomTitle,tube.tubeDescription],
  callback
);
//return db.query("insert into tube(Id,Title,Status) values(?,?,?)",[tube1.Id,tube1.Title,tube1.Status],callback);
},
deleteTube:function(id,callback){
    return db.query("delete from tube where tubeId=?",[id],callback);
},
updateTube:function(id,tube,callback){
    return  db.query("update tube set tubeCustomTitle=? where tubeId=?",[Tube.tubeCustomTitle,tube.tubeId],callback);
},
deleteAll:function(item,callback){
  var delarr=[];
     for(i=0;i<item.length;i++){

         delarr[i]=item[i].Id;
     }
     return db.query("delete from tube where tubeId in (?)",[delarr],callback);
  }
};

module.exports=Tube;
