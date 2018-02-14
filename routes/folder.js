var express = require('express');
var router = express.Router();
var Folder=require('../models/Folder');
var UtilDate = require('../utils/UtilDate')
const uuidv4 = require('uuid/v4');
var dateFormat = require('dateformat');

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
        // console.log('rows', rows)
        res.json(rows);
      }
    });
  }
});

router.post('/',function(req,res,next){
  var abstractedValueUuid = uuidv4().substring(0,5);
  var now = new Date();
  var time = dateFormat(now, "yyyymmdd");
  var folderId = time.concat('-').concat(abstractedValueUuid);
  // console.log('reqbodoy 1', req.body);
  req.body = {
    folderId: folderId, userId: req.body.userId,
    folderTitle: req.body.folderTitle, folderDescription: req.body.folderDescription,
    folderTypeId: req.body.folderTypeId
  }
  // console.log('reqbodoy 2', req.body);
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
