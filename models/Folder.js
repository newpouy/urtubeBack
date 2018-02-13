var db=require('../dbconnection');

var Folder={
getAllFolders: function(callback){
  return db.query("select * from folder",callback);
},

getFolderById:function(id,callback){
  return db.query("select * from folder where folderId=?",[id],callback);
},
addFolder:function(folder,callback){
   // console.log(folder.Id);
  return db.query(
    "Insert into folder values(?,?,?,?,?,now())",
    [folder.folderId,folder.userId,folder.folderTitle,
      folder.folderDescription,folder.folderTypeId],
    callback);
//return db.query("insert into folder(Id,Title,Status) values(?,?,?)",[folder1.Id,folder1.Title,folder1.Status],callback);
},
deleteFolder:function(id,callback){
    return db.query("delete from folder where Id=?",[id],callback);
},
updateFolder:function(id,folder,callback){
    return  db.query("update folder set Title=?,Status=? where Id=?",[Folder.Title,Folder.Status,id],callback);
},
deleteAll:function(item,callback){
  var delarr=[];
     for(i=0;i<item.length;i++){

         delarr[i]=item[i].Id;
     }
     return db.query("delete from folder where Id in (?)",[delarr],callback);
  }
};

module.exports=Folder;
