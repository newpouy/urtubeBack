var express = require('express');
var router = express.Router();
var Tube=require('../models/Tube');

router.get('/:tubeId?',function(req,res,next){
  if(req.params.tubeId){
    Tube.getTubeById(req.params.tubeId,function(err,rows){
      if(err){
          res.json(err);
      }else{
          res.json(rows);
      }
    });
  }else{
    Tube.getAllTubes(function(err,rows){
      if(err){
          res.json(err);
      }else{
          res.json(rows);
      }
    });
  }
});

router.post('/',function(req,res,next){
  Tube.addTube(req.body,function(err,count){
    if(err){
        res.json(err);
    }else{
            res.json(req.body);//or return count for 1 & 0
    }
  });
});

router.post('/:tubeId',function(req,res,next){
  Tube.deleteAll(req.body,function(err,count){
    if(err){
      res.json(err);
    }else{
      res.json(count);
    }
  });
});

router.delete('/:tubeId',function(req,res,next){
  Tube.deleteTube(req.params.tubeId,function(err,count){
    if(err){
        res.json(err);
    }else{
        res.json(count);
    }
  });
});

router.put('/:tubeId',function(req,res,next){
  Tube.updateTube(req.params.tubeId,req.body,function(err,rows){
    if(err){
      res.json(err);
    }else{
      res.json(rows);
    }
  });
});

module.exports=router;
