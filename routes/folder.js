var express = require('express');
var router = express.Router();
var Folder=require('../models/Folder');

router.get('/:folderId?',function(req,res,next){
  if(req.params.folderId){
    Folder.getFolderById(req.params.folderId,function(err,rows){
      if(err){
          res.json(err);
      }else{
          res.json(rows);
      }
    });
  }else{
    Folder.getAllFolders(function(err,rows){
      if(err){
          res.json(err);
      }else{
          res.json(rows);
      }
    });
  }
});

router.post('/',function(req,res,next){
  Folder.addFolder(req.body,function(err,count){
    if(err){
      res.json(err);
    }else{
      res.json(req.body);//or return count for 1 & 0
    }
  });
});

router.post('/:folderId',function(req,res,next){
  Folder.deleteAll(req.body,function(err,count){
    if(err){
      res.json(err);
    }else{
      res.json(count);
    }
  });
});

router.delete('/:folderId',function(req,res,next){
  Folder.deleteFolder(req.params.folderId,function(err,count){
    if(err){
        res.json(err);
    }else{
        res.json(count);
    }
  });
});

router.put('/:folderId',function(req,res,next){
  Folder.updateFolder(req.params.folderId,req.body,function(err,rows){
    if(err){
      res.json(err);
    }else{
      res.json(rows);
    }
  });
});

module.exports=router;
